import {
  ChangeDetectionStrategy,
  Component,
}                      from '@angular/core';

import {
  Observable,
  of as observableOf,
}                      from 'rxjs';
import { map }         from 'rxjs/operators';

import { Todo }        from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-cold-example-1',
  templateUrl     : './cold-example-1.component.html',
  styleUrls       : ['./cold-example-1.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExample1Component {
  public todoList$: Observable<Todo[]>;
  public todo$: Observable<Todo>;
  public todoIsComplete$: Observable<{ 'isComplete': boolean; }>;
  public todoName$: Observable<string>;
  public todoTimeCreated$: Observable<string>;

  constructor(
    private todoService: TodoService,
  ) { }

  public getTodos(): void {
    this.resetTodos();
    this.todoList$ = this.todoService.getTodos();
  }

  public getTodosCold(): void {
    this.resetTodos();
    this.todoList$ = this.todoService.getTodosCreate();
  }

  public getTodoByID(): void {
    this.resetTodos();
    const payload: number = 1;
    this.todo$ = this.todoService.getTodoByID(payload);
  }

  public getTodoDetailsByID(): void {
    this.resetTodos();
    this.getTodoIsCompleteByID();
    this.getTodoNameByID();
    this.getTodoTimeCreatedByID();
  }

  private getTodoIsCompleteByID(): void {
    const payload: number = 1;
    this.todoIsComplete$ = this.todoService.getTodoByID(payload).pipe(
      map(response => {
        return { 'isComplete': response.isComplete };
      }),
    );
  }

  private getTodoNameByID(): void {
    const payload: number = 1;
    this.todoName$ = this.todoService.getTodoByID(payload).pipe(
      map(response => response.name),
    );
  }

  private getTodoTimeCreatedByID(): void {
    const payload: number = 1;
    this.todoTimeCreated$ = this.todoService.getTodoByID(payload).pipe(
      map(response => response.timeCreated),
    );
  }

  private resetTodos(): void {
    this.todoList$ = observableOf(null);
    this.todo$ = observableOf(null);
    this.todoIsComplete$ = observableOf(null);
    this.todoName$ = observableOf(null);
    this.todoTimeCreated$ = observableOf(null);
  }
}
