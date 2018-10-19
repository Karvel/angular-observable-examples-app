import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
}                          from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
}                          from '@angular/forms';

import { from }            from 'rxjs';
import { concatMap, map }  from 'rxjs/operators';

import { ICompany }        from 'src/app/core/models/company';
import { CompanyService }  from 'src/app/core/services/company.service';
import { IEmployee }       from '../../../core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ToastService }    from '../../../core/services/toast.service';
import { TableColumns }    from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-smart',
  templateUrl     : './pitfalls-smart.component.html',
  styleUrls       : ['./pitfalls-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsSmartComponent implements OnInit {
  public companyList: ICompany[];
  public displayedColumns: TableColumns[] = [
    {
      columnId: 'firstName',
      columnName: 'First Name',
    },
    {
      columnId: 'lastName',
      columnName: 'Last Name',
    },
    {
      columnId: 'jobTitle',
      columnName: 'Job Title',
    },
  ];
  public employeeList: IEmployee[] = [];
  public form: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.initializeFormSubscription();
    this.getCompanyList();
  }

  public updateCompanyConcat(): void {
    from(this.companyList)
      .pipe(concatMap((company: ICompany) => {
        const payload = { ...company };
        payload.isSelected = !(payload.isSelected);
        return this.companyService.updateCompany(payload);
      }))
      .subscribe();
  }

  public toggleEmployeeState(employee: IEmployee): void {
    const payload = { ...employee };
    payload.isActive = !(payload.isActive);
    this.employeeService.updateEmployee(payload).subscribe();
  }

  private getCompanyList(): void {
    this.companyService.getCompanyList().pipe(
      map(response => {
        this.companyList = response;
        this.cd.detectChanges();
      }),
    ).subscribe();
  }

  private initializeFormSubscription(): void {
    this.selectedCompanyControl.valueChanges.subscribe((companyKey: string) => {
      this.companyService.getCompanyList().subscribe((companyList: ICompany[]) => {
        const company: ICompany = companyList.find(foundCompany => foundCompany.key === companyKey);
        this.employeeService.getEmployeesByCompanyKey(companyKey).subscribe((employees: IEmployee[]) => {
          this.employeeList = employees;
          const employeeCount: number = this.countActiveEmployees(employees).length;
          if (employeeCount) {
            this.updateCompanyAndToast(company, employeeCount);
          }
        });
      });
    });
  }

  private updateCompanyAndToast(company: ICompany, employeeCount: number): void {
    this.displayActiveToast(employeeCount, company.companyName);
    if (company && company.employeeCount !== employeeCount) {
      company.employeeCount = employeeCount;
      this.companyService.updateCompany(company).subscribe();
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      selectedCompany: '',
    });
  }

  private countActiveEmployees(employeeList: IEmployee[]): IEmployee[] {
    const activeEmployees: IEmployee[] = employeeList.filter(employee => employee.isActive);

    return activeEmployees;
  }

  private displayActiveToast(isActiveCount: number, companyName: string): void {
    const description: string = (isActiveCount > 1)
      ? `There are ${isActiveCount} active employees for ${companyName}.`
      : `There is ${isActiveCount} active employee for ${companyName}`;
    const message = {
      header: 'Attention',
      description,
    };
    this.toastService.showToastInfo(message);
  }

  private get selectedCompanyControl(): AbstractControl {
    return this.form.get('selectedCompany');
  }
}
