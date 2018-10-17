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
  Observable,
  Subscription,
  from,
}                          from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  switchMap,
}                          from 'rxjs/operators';

import { Company }         from '../../../core/models/company';
import { CompanyService }  from 'src/app/core/services/company.service';
import {
  Employee,
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
  public companyList: Company[];
  public companyList$: Observable<Company[]>;
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
  public employeeList$: Observable<Employee[]>;
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

  public updateCompanyConcat(): void {
    const concatMapControlSubscription: Subscription = from(this.companyList)
      .pipe(concatMap((company: Company) => {
        const payload = { ...company };
        payload.isSelected = !(payload.isSelected);
        return this.companyService.updateCompany(payload);
      }))
      .subscribe();
    this.subscriptions.push(concatMapControlSubscription);
  }

  public toggleEmployeeState(employee: Employee) {
    const payload = { ...employee };
    payload.isFoo = !(payload.isFoo);
    const toggleEmployeSubscription: Subscription = this.employeeService.updateEmployee(payload).subscribe();
    this.subscriptions.push(toggleEmployeSubscription);
  }

  private getCompanyList(): void {
    this.companyList$ = this.companyService.getCompanyList().pipe(
      map(response => {
        this.companyList = response;
        return response;
      }),
    );
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

  private displayActiveToast(isActiveAmount: number): void {
    const description: string = (isActiveAmount > 1)
      ? `There are ${isActiveAmount} active employees.`
      : `There is ${isActiveAmount} active employee`;
    const message = {
      header: 'Attention',
      description,
    };
    this.toastService.showToastSuccess(message);
  }

  private get selectedCompanyControl(): AbstractControl {
    return this.form.get('selectedCompany');
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
      map((companyAndEmployees: { companyKey: string; employees: Employee[]; }) => {
        const company: Company = this.companyList.find(foundCompany => foundCompany.key === companyAndEmployees.companyKey);
        const employeeCount: number = this.checkNumberOfIsActive(companyAndEmployees.employees).length;
        if (employeeCount) {
          this.displayActiveToast(employeeCount);
          if (company && company.employeeCount !== employeeCount) {
            company.employeeCount = employeeCount;
            const updateCompanySubscription: Subscription = this.companyService.updateCompanyList(company).subscribe();
            this.subscriptions.push(updateCompanySubscription);
          }
        }
        return companyAndEmployees.employees;
      }),
    );
  }
}
