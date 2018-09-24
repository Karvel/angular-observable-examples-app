import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { Todo }       from '../models/todo';

@Injectable()
export class TodoService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getTodos(): Observable<Todo[]> {
    return this.apiService.todo.getTodos().pipe(map((response: Todo[]) => response));
  }

  public getTodoByID(id: number): Observable<Todo> {
    return this.apiService.todo.getTodoByID(id).pipe(map((response: Todo) => response));
  }
}
