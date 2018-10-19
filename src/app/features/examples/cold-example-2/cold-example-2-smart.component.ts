import {
  ChangeDetectionStrategy,
  Component,
}                      from '@angular/core';

import {
  Observable,
  of as observableOf,
}                      from 'rxjs';

import { ITodo }       from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-cold-example-2-smart',
  templateUrl     : './cold-example-2-smart.component.html',
  styleUrls       : ['./cold-example-2-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExample2SmartComponent {
  public todoList$: Observable<ITodo[] | null>;
  public todo$: Observable<ITodo | null>;

  constructor(
    private todoService: TodoService,
  ) { }

  public getTodos(): void {
    this.resetTodos();
    this.todoList$ = this.todoService.getTodos();
  }

  public getTodoByID(): void {
    this.resetTodos();
    const payload: number = 1;
    this.todo$ = this.todoService.getTodoByID(payload);
  }

  private resetTodos(): void {
    this.todo$ = observableOf(null);
    this.todoList$ = observableOf(null);
  }
}
