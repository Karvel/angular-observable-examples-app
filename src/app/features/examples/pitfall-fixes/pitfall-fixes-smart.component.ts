import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
}                          from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
}                          from '@angular/forms';

import {
  from,
  Observable,
  Subscription,
}                          from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  switchMap,
}                          from 'rxjs/operators';

import { ICompany }        from '../../../core/models/company';
import { CompanyService }  from 'src/app/core/services/company.service';
import {
  IEmployee,
  mockEmployeeList,
}                          from '../../../core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ToastService }    from '../../../core/services/toast.service';
import { TableColumns }    from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfall-fixes-smart',
  templateUrl     : './pitfall-fixes-smart.component.html',
  styleUrls       : ['./pitfall-fixes-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallFixesSmartComponent implements OnInit {
  public companyList: ICompany[];
  public companyList$: Observable<ICompany[]>;
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
    {
      columnId: 'companyName',
      columnName: 'Employed at',
    },
  ];
  public employeeList$: Observable<IEmployee[]>;
  public form: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
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

  public toggleEmployeeState(employee: IEmployee): void {
    const payload = { ...employee };
    payload.isActive = !(payload.isActive);
    const toggleEmployeeSubscription: Subscription = this.employeeService.updateEmployee(payload).subscribe();
    this.subscriptions.push(toggleEmployeeSubscription);
  }

  private getCompanyList(): void {
    this.companyList$ = this.companyService.getCompanyList().pipe(
      map(response => this.companyList = response),
    );
  }

  private initializeFormSubscription(): void {
    this.employeeList$ = this.selectedCompanyControl.valueChanges.pipe(
      switchMap((companyKey: string) => {
        return this.employeeService.getEmployeesByCompanyKey(companyKey).pipe(
          map(employees => {
            return { companyKey, employees };
          })
        );
      }),
      mergeMap((companyAndEmployees: { companyKey: string; employees: IEmployee[]; }) => {
        const company: ICompany = this.companyList.find(foundCompany => foundCompany.key === companyAndEmployees.companyKey);
        const employeeCount: number = this.countActiveEmployees(companyAndEmployees.employees).length;
        return this.updateCompanyAndToast(company, employeeCount).pipe(
          map(() => companyAndEmployees.employees));
      }),
    );
  }

  private updateCompanyAndToast(company: ICompany, employeeCount: number): Observable<ICompany> {
    this.displayActiveToast(employeeCount, company.companyName);
    company.employeeCount = employeeCount;
    return this.companyService.updateCompany(company);
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
    this.toastService.showToastSuccess(message);
  }

  private get selectedCompanyControl(): AbstractControl {
    return this.form.get('selectedCompany');
  }
}
