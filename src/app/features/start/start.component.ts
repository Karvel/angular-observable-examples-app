import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
}                           from '@angular/core';

import {
  from,
  Subscription,
}                           from 'rxjs';
import {
  map,
  mergeMap,
  take,
}                           from 'rxjs/operators';

import { CompanyService }   from 'src/app/core/services/company.service';
import {
  mockCompanyList,
  ICompany,
}                           from 'src/app/core/models/company';
import { EmployeeService }  from 'src/app/core/services/employee.service';
import { mockEmployeeList } from 'src/app/core/models/employee';
import { TodoService }      from 'src/app/core/services/todo.service';
import { mockTodoList }     from 'src/app/core/models/todo';

@Component({
  selector        : 'app-start',
  templateUrl     : './start.component.html',
  styleUrls       : ['./start.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class StartComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private todoService: TodoService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public addSeedCompanies(): void {
    mockCompanyList.forEach(company => this.companyService.addCompany(company));
  }

  public addSeedEmployees(): void {
    mockEmployeeList.forEach(employee => this.employeeService.addEmployee(employee));
  }

  public addSeedTodoItems(): void {
    mockTodoList.forEach(todoItem => this.todoService.createTodo(todoItem).subscribe());
  }

  /** Assigns random company names and keys to every employee.*/
  public assignEmployeesToCompanies(): void {
    const mapCompaniesToEmployeesSubscription = this.companyService.getCompanyList()
      .pipe(
        take(1),
        mergeMap(companyList => this.employeeService.getEmployees().pipe(
          take(1),
          mergeMap(employees => from(employees).pipe(
            mergeMap(employee => {
              const selectedCompany = this.chooseRandomCompany(companyList);
              employee.companyKey = selectedCompany.key;
              employee.companyName = selectedCompany.companyName;
              return this.employeeService.updateEmployee(employee).pipe(
                map(updatedEmployee => updatedEmployee),
              );
            }),
          )),
        )),
      )
      .subscribe();

    this.subscriptions.push(mapCompaniesToEmployeesSubscription);
  }

  private chooseRandomCompany(companyList: ICompany[]): ICompany {
    const randomCompanyNumber = this.getRandomInt(companyList.length);
    return companyList[randomCompanyNumber];
  }

  private getRandomInt(max: number): number {
    const min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
