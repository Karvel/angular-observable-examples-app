import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
}                      from '@angular/core';

import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import { Todo }        from '../../../core/models/todo';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector        : 'app-cold-example-1',
  templateUrl     : './cold-example-1.component.html',
  styleUrls       : ['./cold-example-1.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExample1Component implements OnInit {
  public todoList$: Observable<Todo[]>;
  public todo$: Observable<Todo>;
  public todoName$: Observable<string>;
  public todoTimeCreated$: Observable<string>;
  public todoIsComplete$: Observable<boolean>;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void { }

  public getTodos(): void {
    this.todoList$ = this.todoService.getTodos();
  }

  public getTodoByID(): void {
    const payload: number = 1;
    this.todo$ = this.todoService.getTodoByID(payload);
  }

  public getTodoDetailsByID(): void {
    this.getTodoNameByID();
    this.getTodoTimeCreatedByID();
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
}
