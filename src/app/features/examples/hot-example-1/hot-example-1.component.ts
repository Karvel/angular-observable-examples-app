import {
  ChangeDetectionStrategy,
  Component,
}                      from '@angular/core';

import { Observable }  from 'rxjs';

import { Todo }        from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-hot-example-1',
  templateUrl     : './hot-example-1.component.html',
  styleUrls       : ['./hot-example-1.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HotExample1Component {
  public todoList$: Observable<Todo[]>;
  public todo$: Observable<Todo>;

  constructor(
    private todoService: TodoService,
  ) { }

  public getTodos(): void {
    this.todoList$ = this.todoService.getTodos();
  }

  public getTodoByID(): void {
    const payload: number = 1;
    this.todo$ = this.todoService.getTodoByIDHot(payload);
  }
}
