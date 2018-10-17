import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
}                          from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
}                          from '@angular/forms';

import {
  from,
  Subscription,
}                          from 'rxjs';
import { concatMap, map }  from 'rxjs/operators';

import { Company }         from 'src/app/core/models/company';
import { CompanyService }  from 'src/app/core/services/company.service';
import { Employee }        from '../../../core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ToastService }    from '../../../core/services/toast.service';
import { TableColumns }    from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-smart',
  templateUrl     : './pitfalls-smart.component.html',
  styleUrls       : ['./pitfalls-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsSmartComponent implements OnInit, OnDestroy {
  public companyList: Company[];
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
  public employeeList: Employee[] = [];
  public form: FormGroup;

  private subscriptions: Subscription[] = [];

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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public updateCompanyConcat(): void {
    const concatMapControlSubscription: Subscription = from(this.companyList)
      .pipe(concatMap((company: Company) => {
        const payload = { ...company };
        payload.isSelected = !(payload.isSelected);
        return this.companyService.updateCompany(payload);
      }))
      .subscribe();
  }

  public toggleEmployeeState(employee: Employee): void {
    const payload = { ...employee };
    payload.isFoo = !(payload.isFoo);
    const toggleEmployeSubscription: Subscription = this.employeeService.updateEmployee(payload).subscribe();
  }

  private getCompanyList(): void {
    const companyList$: Subscription = this.companyService.getCompanyList().pipe(
      map(response => {
        this.companyList = response;
        this.cd.detectChanges();
      }),
    ).subscribe();
  }

  private initializeFormSubscription(): void {
    this.selectedCompanyControl.valueChanges.subscribe((companyKey: string) => {
      this.companyService.getCompanyList().subscribe((companyList: Company[]) => {
        const company: Company = companyList.find(foundCompany => foundCompany.key === companyKey);
        this.employeeService.getEmployeesByCompanyKey(companyKey).subscribe((employees: Employee[]) => {
          this.employeeList = employees;
          const employeeCount: number = this.checkNumberOfIsActive(employees).length;
          if (employeeCount) {
            this.updateCompanyAndToast(company, employeeCount);
          }
        });
      });
    });
  }

  private updateCompanyAndToast(company: Company, employeeCount: number): void {
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

  private checkNumberOfIsActive(employeeList: Employee[]): Employee[] {
    const filteredEmployees: Employee[] = employeeList.filter(employee => employee.isFoo);

    return filteredEmployees;
  }

  private displayActiveToast(isActiveAmount: number, companyName: string): void {
    const description: string = (isActiveAmount > 1)
      ? `There are ${isActiveAmount} active employees for ${companyName}.`
      : `There is ${isActiveAmount} active employee for ${companyName}`;
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
