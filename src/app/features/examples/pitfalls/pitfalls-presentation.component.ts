import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                       from '@angular/core';
import { FormGroup }    from '@angular/forms';

import { Company }      from 'src/app/core/models/company';
import { Employee }     from '../../../core/models/employee';
import { TableColumns } from '../../../core/models/table-columns';

@Component({
  selector        : 'app-pitfalls-presentation',
  templateUrl     : './pitfalls-presentation.component.html',
  styleUrls       : ['./pitfalls-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PitfallsPresentationComponent {
  @Input() public companyList: Company[];
  @Input() public displayedColumns: TableColumns[];
  @Input() public employeeList: Employee[];
  @Input() public form: FormGroup;

  @Output() public emitCompanyConcat: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  public toggleEmployeeState(employee: Employee): void {
    this.emitEmployee.emit(employee);
  }

  public updateCompanyConcat(): void {
    this.emitCompanyConcat.emit();
  }
}
