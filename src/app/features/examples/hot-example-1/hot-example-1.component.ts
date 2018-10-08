import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
}                      from '@angular/core';

import { Observable }  from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Todo }        from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-hot-example-1',
  templateUrl     : './hot-example-1.component.html',
  styleUrls       : ['./hot-example-1.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HotExample1Component implements OnInit {
  public todoList$: Observable<Todo[]>;
  public todo$: Observable<Todo>;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void { }

  public getTodos(): void {
    this.todoList$ = this.todoService.getTodos();
  }

  public getTodoByID(): void {
    const payload: number = 1;
    this.todo$ = this.todoService.getTodoByIDHot(payload);
  }
}
