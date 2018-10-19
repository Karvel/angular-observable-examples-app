import {
  Component,
  ChangeDetectionStrategy,
}                           from '@angular/core';

import { CompanyService }   from 'src/app/core/services/company.service';
import { mockCompanyList }  from 'src/app/core/models/company';
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
export class StartComponent {
  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private todoService: TodoService,
  ) { }

  public addSeedCompanies(): void {
    mockCompanyList.forEach(company => this.companyService.addCompany(company));
  }

  public addSeedEmployees(): void {
    mockEmployeeList.forEach(employee => this.employeeService.addEmployee(employee));
  }

  public addSeedTodoItems(): void {
    mockTodoList.forEach(todoItem => this.todoService.createTodo(todoItem).subscribe());
  }
}
