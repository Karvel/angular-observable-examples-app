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
  selector        : 'app-pitfall-fixes-presentation',
  templateUrl     : './pitfall-fixes-presentation.component.html',
  styleUrls       : ['./pitfall-fixes-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallFixesPresentationComponent {
  @Input() public columnIdList: string[];
  @Input() public displayedColumns: TableColumns[];
  @Input() public employeeList: Employee[];

  @Output() public emitCompanyConcat: EventEmitter<void> = new EventEmitter<void>();

  public updateCompanyConcat(): void {
    this.emitCompanyConcat.emit();
  }
}
