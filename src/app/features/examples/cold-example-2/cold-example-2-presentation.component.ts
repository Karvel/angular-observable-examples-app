import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                from '@angular/core';

import { ITodo } from '../../../core/models/todo';

@Component({
  selector        : 'app-cold-example-2-presentation',
  templateUrl     : './cold-example-2-presentation.component.html',
  styleUrls       : ['./cold-example-2-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExample2PresentationComponent {
  @Input() public todo: ITodo;
  @Input() public todoList: ITodo[];

  @Output() public emitGetTodos: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitGetTodoByID: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public getTodos(): void {
    this.emitGetTodos.emit();
  }

  public getTodoByID(): void {
    this.emitGetTodoByID.emit();
  }
}
