import { Injectable } from '@angular/core';

import {
  Observable,
  of as observableOf,
}                     from 'rxjs';
import {
  map,
  shareReplay,
}                     from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import {
  mockTodoList,
  ITodo,
}                     from '../models/todo';

@Injectable()
export class TodoService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getTodos(): Observable<ITodo[]> {
    return this.apiService.todo.getTodos().pipe(map((response: ITodo[]) => response));
  }

  public getTodosCreate(): Observable<ITodo[]> {
    return observableOf(mockTodoList);
  }

  public getTodoByID(id: number): Observable<ITodo> {
    return this.apiService.todo.getTodoByID(id).pipe(map((response: ITodo) => response));
  }

  public getTodoByIDHot(id: number): Observable<ITodo> {
    return this.apiService.todo.getTodoByID(id).pipe(
      shareReplay(1),
      map((response: ITodo) => response),
    );
  }

  public createTodo(payload: ITodo): Observable<ITodo> {
    return this.apiService.todo.createTodo(payload).pipe(map((response: ITodo) => response));
  }

  public updateTodo(id: number, todo: ITodo): Observable<void> {
    return this.apiService.todo.updateTodo(id, todo).pipe(map((response: never) => response));
  }

  public deleteTodo(id: number): Observable<void> {
    return this.apiService.todo.deleteTodo(id).pipe(map((response: never) => response));
  }
}
