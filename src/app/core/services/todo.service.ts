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

  public createTodo(payload: Todo): Observable<Todo> {
    return this.apiService.todo.createTodo(payload).pipe(map((response: Todo) => response));
  }

  public updateTodo(id: number, todo: Todo): Observable<void> {
    return this.apiService.todo.updateTodo(id, todo).pipe(map((response: never) => response));
  }

  public deleteTodo(id: number): Observable<void> {
    return this.apiService.todo.deleteTodo(id).pipe(map((response: never) => response));
  }
}
