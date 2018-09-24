import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';

import { Observable }  from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { Todo }        from '../../../models/todo';

@Injectable()
export class ApiTodoService {
  public url: string = environment.apiRoute;

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Object> {
    return this.http.get(`${this.url}/todo/`);
  }

  public getTodoByID(id: number): Observable<Object> {
    return this.http.get(`${this.url}/todo/${id}`);
  }

  public createTodo(todo: Todo): Observable<Object> {
    return this.http.post(`${this.url}/todo/`, todo);
  }

  public updateTodo(id: number, todo: Todo): Observable<Object> {
    return this.http.put(`${this.url}/todo/${id}`, todo);
  }

  public deleteTodo(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/todo/${id}`);
  }
}
