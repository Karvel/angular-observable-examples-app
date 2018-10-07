import { Injectable }         from '@angular/core';

import { ApiScheduleService } from './endpoints/schedule/api-schedule.service';
import { ApiTodoService }     from './endpoints/todo/api-todo.service';

@Injectable()
export class ApiService {
  constructor(
    public schedule: ApiScheduleService,
    public todo: ApiTodoService,
  ) { }
}

export const apiProviders = [
  ApiService,
  ApiScheduleService,
  ApiTodoService,
];
