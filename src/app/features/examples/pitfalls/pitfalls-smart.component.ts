import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
}                          from '@angular/core';

import { Subscription }    from 'rxjs';

import { CompanyService }  from 'src/app/core/services/company.service';
import { Employee }        from '../../../core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ToastService }  from '../../../core/services/toast.service';
import { TableColumns }    from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-smart',
  templateUrl     : './pitfalls-smart.component.html',
  styleUrls       : ['./pitfalls-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsSmartComponent implements OnInit, OnDestroy {
  public columnIdList: string[] = [];
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

  private subscriptions: Subscription[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getEmployeesByCompanyKey();
    this.filterTableColumns(this.displayedColumns);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getEmployeesByCompanyKey(): void {
    this.companyService.getCompanyList().subscribe((company) => {
      this.employeeService.getEmployeesByCompanyKey(company[9].key).subscribe(results => {
        this.employeeList = results;
        const employeeNumber: number = this.checkNumberOfIsFoo(results).length;
        if (employeeNumber) { this.displayFooToast(employeeNumber); }
        this.cd.detectChanges();
      });
    });
  }

  private checkNumberOfIsFoo(employeeList: Employee[]): Employee[] {
    const filteredEmployees: Employee[] = employeeList.filter(employee => employee.isFoo);

    return filteredEmployees;
  }

  private filterTableColumns(data: TableColumns[]): string[] {
    data.forEach(datum => {
      if (this.columnIdList.indexOf(datum.columnId) === -1) {
        this.columnIdList.push(datum.columnId);
      }
    });

    return this.columnIdList;
  }

  private displayFooToast(isFooAmount: number): void {
    const description: string = (isFooAmount > 1)
      ? `There are ${isFooAmount} employees ready for Foo.`
      : `There is ${isFooAmount} employee ready for Foo.`;
    const message = {
      header: 'Attention',
      description,
    };
    this.toastService.showToastInfo(message);
  }
}
