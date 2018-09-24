import { Injectable }     from '@angular/core';

import { ApiTodoService } from './endpoints/todo/api-todo.service';

@Injectable()
export class ApiService {
  constructor(
    public todo: ApiTodoService,
  ) { }
}

export const apiProviders = [
  ApiService,
  ApiTodoService,
];
