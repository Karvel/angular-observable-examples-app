import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                       from '@angular/core';

import { Employee }     from '../../../core/models/employee';
import { TableColumns } from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-presentation',
  templateUrl     : './pitfalls-presentation.component.html',
  styleUrls       : ['./pitfalls-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsPresentationComponent {
  @Input() public columnIdList: string[];
  @Input() public displayedColumns: TableColumns[];
  @Input() public employeeList: Employee[];

  @Output() public emitCompanyConcat: EventEmitter<void> = new EventEmitter<void>();

  public updateCompanyConcat(): void {
    this.emitCompanyConcat.emit();
  }
}
