import { Injectable }         from '@angular/core';

import { ApiCompanyService }  from './endpoints/company/api-company.service';
import { ApiEmployeeService } from './endpoints/employee/api-employee.service';
import { ApiTodoService }     from './endpoints/todo/api-todo.service';

@Injectable()
export class ApiService {
  constructor(
    public company: ApiCompanyService,
    public employee: ApiEmployeeService,
    public todo: ApiTodoService,
  ) { }
}

export const apiProviders = [
  ApiService,
  ApiEmployeeService,
  ApiCompanyService,
  ApiTodoService,
];
