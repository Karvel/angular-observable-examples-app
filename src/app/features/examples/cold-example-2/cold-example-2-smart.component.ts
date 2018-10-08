import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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
export class ColdExample2SmartComponent implements OnInit {
  public todoList$: Observable<Todo[]>;
  public todo$: Observable<Todo>;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void { }

  public getTodos(): void {
    this.todoList$ = this.todoService.getTodos();
  }
}
