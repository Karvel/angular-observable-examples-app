import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-cold-example-smart',
  templateUrl     : './cold-example-smart.component.html',
  styleUrls       : ['./cold-example-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExampleSmartComponent {
  constructor() { }
}
