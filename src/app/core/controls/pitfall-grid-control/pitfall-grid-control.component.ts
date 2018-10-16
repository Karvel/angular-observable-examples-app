import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
}                       from '@angular/core';
import { TableColumns } from '../../models/table-columns';

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
    this.filterTableColumns(this.displayedColumns);
  }

  private filterTableColumns(data: TableColumns[]): string[] {
    data.forEach(datum => {
      if (this.columnIdList.indexOf(datum.columnId) === -1) {
        this.columnIdList.push(datum.columnId);
      }
    });

    return this.columnIdList;
  }
}
