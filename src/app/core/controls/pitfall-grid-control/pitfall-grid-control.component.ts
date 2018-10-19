import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
}                       from '@angular/core';

import { IEmployee }    from '../../models/employee';
import { TableColumns } from '../../models/table-columns';
import { Utils }        from '../../services/utils';

@Component({
  selector        : 'app-pitfall-grid-control',
  templateUrl     : './pitfall-grid-control.component.html',
  styleUrls       : ['./pitfall-grid-control.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallGridControlComponent implements OnInit {
  @Input() public dataSource: any[];
  @Input() public displayedColumns: TableColumns[];

  @Output() public emitEmployee: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  public columnIdList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columnIdList = Utils.filterTableColumns(this.displayedColumns);
    this.columnIdList.push('isActive');
  }

  public checkIfActive(isActive: boolean): string {
    return (isActive) ? 'Deactivate' : 'Activate' ;
  }

  public toggleEmployeeState(employee: IEmployee): void {
    this.emitEmployee.emit(employee);
  }
}
