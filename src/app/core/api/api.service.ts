import { Injectable }         from '@angular/core';

import { ApiCompanyService }  from './endpoints/company/api-company.service';
import { ApiScheduleService } from './endpoints/schedule/api-schedule.service';
import { ApiTodoService }     from './endpoints/todo/api-todo.service';

@Injectable()
export class ApiService {
  constructor(
    public company: ApiCompanyService,
    public schedule: ApiScheduleService,
    public todo: ApiTodoService,
  ) { }
}

export const apiProviders = [
  ApiService,
  ApiCompanyService,
  ApiScheduleService,
  ApiTodoService,
];
