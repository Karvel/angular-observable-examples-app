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
  selector        : 'app-hot-example-1',
  templateUrl     : './hot-example-1.component.html',
  styleUrls       : ['./hot-example-1.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HotExample1Component {
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
    this.todo$ = this.todoService.getTodoByIDHot(payload);
  }

  private resetTodos(): void {
    this.todo$ = observableOf(null);
    this.todoList$ = observableOf(null);
  }
}
