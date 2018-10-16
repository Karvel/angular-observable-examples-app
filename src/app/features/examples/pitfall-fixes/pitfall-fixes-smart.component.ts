import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
}                          from '@angular/core';

import {
  Observable,
  Subscription,
  from,
}                          from 'rxjs';

import {
  map,
  switchMap,
  concatMap,
  take,
}                          from 'rxjs/operators';

import { Company }         from '../../../core/models/company';
import { CompanyService }  from 'src/app/core/services/company.service';
import { Employee }        from '../../../core/models/employee';
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
  public companyList: Company[];
  public employeeList$: Observable<Employee[]>;

  private subscriptions: Subscription[] = [];

  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private toastService: ToastService,
  ) {
  }

  ngOnInit(): void {
    this.getEmployeesByCompanyKey();
  }

  public updateCompanyConcat(): void {
    const concatMapControlSubscription: Subscription = from(this.companyList)
      .pipe(concatMap((company: Company) => {
        const payload = { ...company };
        payload.isSelected = !(payload.isSelected);
        return this.companyService.updateCompanyList(payload);
      }))
      .subscribe();
    this.subscriptions.push(concatMapControlSubscription);
  }

  private getEmployeesByCompanyKey(): void {
    this.employeeList$ = this.companyService.getCompanyList().pipe(
      take(1),
      switchMap(companyList => {
        this.companyList = companyList;
        return this.employeeService.getEmployeesByCompanyKey(companyList[9].key);
      }),
      map(employeeList => {
        const employeeNumber: number = this.checkNumberOfIsFoo(employeeList).length;
        if (employeeNumber) { this.displayFooToast(employeeNumber); }
        return employeeList;
      }),
    );
  }

  private checkNumberOfIsFoo(employeeList: Employee[]): Employee[] {
    const filteredEmployees: Employee[] = employeeList.filter(employee => employee.isFoo);

    return filteredEmployees;
  }

  private displayFooToast(isFooAmount: number): void {
    const description: string = (isFooAmount > 1)
      ? `There are ${isFooAmount} employees ready for Foo.`
      : `There is ${isFooAmount} employee ready for Foo.`;
    const message = {
      header: 'Attention',
      description,
    };
    this.toastService.showToastSuccess(message);
  }
}
