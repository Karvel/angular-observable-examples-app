import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';

import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { ITodo }       from '../../../models/todo';

@Injectable()
export class ApiTodoService {
  public url: string = environment.apiRoute;

  constructor(
    private http: HttpClient,
  ) { }

  public getTodos(): Observable<ITodo[]> {
    return this.http.get(`${this.url}/todo/`).pipe(map((response) => response as ITodo[]));
  }

  public getTodoByID(id: number): Observable<ITodo> {
    return this.http.get(`${this.url}/todo/${id}`).pipe(map((response) => response as ITodo));
  }

  public createTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post(`${this.url}/todo/`, todo).pipe(map((response) => response as ITodo));
  }

  public updateTodo(id: number, todo: ITodo): Observable<void> {
    return this.http.put(`${this.url}/todo/${id}`, todo).pipe(map((response) => response as never));
  }

  public deleteTodo(id: number): Observable<void> {
    return this.http.delete(`${this.url}/todo/${id}`).pipe(map((response) => response as never));
  }
}
