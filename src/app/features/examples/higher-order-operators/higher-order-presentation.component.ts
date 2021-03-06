import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
}                    from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ICompany }  from 'src/app/core/models/company';

@Component({
  selector        : 'app-higher-order-presentation',
  templateUrl     : './higher-order-presentation.component.html',
  styleUrls       : ['./higher-order-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderOperatorsPresentationComponent {
  @Input() public companyListSwitch: ICompany[];
  @Input() public companyListExhaust: ICompany[];
  @Input() public form: FormGroup;

  @Output() public emitForkJoin: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitCombineLatest: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitConcatMap: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitMergeMap: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitSwitchMap: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitExhaustMap: EventEmitter<void> = new EventEmitter<void>();

  public getForkJoin(): void {
    this.emitForkJoin.emit();
  }

  public getCombineLatest(): void {
    this.emitCombineLatest.emit();
  }

  public getConcatMap(): void {
    this.emitConcatMap.emit();
  }

  public getMergeMap(): void {
    this.emitMergeMap.emit();
  }

  public getSwitchMap(): void {
    this.emitSwitchMap.emit();
  }

  public getExhaustMap(): void {
    this.emitExhaustMap.emit();
  }
}
