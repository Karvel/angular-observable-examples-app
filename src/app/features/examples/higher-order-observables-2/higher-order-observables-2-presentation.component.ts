import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                    from '@angular/core';

import { Company }   from 'src/app/core/models/company';

@Component({
  selector        : 'app-higher-order-observables-2-presentation',
  templateUrl     : './higher-order-observables-2-presentation.component.html',
  styleUrls       : ['./higher-order-observables-2-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderObservables2PresentationComponent {
  @Input() public companyList: Company[];

  @Output() public emitCompanyConcat: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitCompanyMerge: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitReset: EventEmitter<void> = new EventEmitter<void>();

  public updateCompanyConcat(): void {
    this.emitCompanyConcat.emit();
  }

  public updateCompanyMerge(): void {
    this.emitCompanyMerge.emit();
  }

  public resetCompanyNames(): void {
    this.emitReset.emit();
  }
}
