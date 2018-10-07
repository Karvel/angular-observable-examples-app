import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-examples-smart',
  templateUrl     : './examples-smart.component.html',
  styleUrls       : ['./examples-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ExamplesSmartComponent {
  constructor() { }
}
