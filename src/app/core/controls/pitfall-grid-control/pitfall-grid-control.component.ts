import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
}                       from '@angular/core';
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

  public columnIdList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columnIdList = Utils.filterTableColumns(this.displayedColumns);
  }
}
