import {
  ChangeDetectionStrategy,
  Component,
}                      from '@angular/core';

import { Observable }  from 'rxjs';

import { Todo }        from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-cold-example-2-smart',
  templateUrl     : './cold-example-2-smart.component.html',
  styleUrls       : ['./cold-example-2-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExample2SmartComponent {
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
    this.todo$ = this.todoService.getTodoByID(payload);
  }
}
