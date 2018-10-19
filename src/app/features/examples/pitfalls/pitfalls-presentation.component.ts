import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                       from '@angular/core';
import { FormGroup }    from '@angular/forms';

import { ICompany }     from 'src/app/core/models/company';
import { IEmployee }    from '../../../core/models/employee';
import { TableColumns } from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-presentation',
  templateUrl     : './pitfalls-presentation.component.html',
  styleUrls       : ['./pitfalls-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsPresentationComponent {
  @Input() public companyList: ICompany[];
  @Input() public displayedColumns: TableColumns[];
  @Input() public employeeList: IEmployee[];
  @Input() public form: FormGroup;

  @Output() public emitCompanyConcat: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitEmployee: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  public toggleEmployeeState(employee: IEmployee): void {
    this.emitEmployee.emit(employee);
  }

  public updateCompanyConcat(): void {
    this.emitCompanyConcat.emit();
  }
}
