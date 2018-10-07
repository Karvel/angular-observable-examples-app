import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-examples-presentation',
  templateUrl     : './examples-presentation.component.html',
  styleUrls       : ['./examples-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ExamplesPresentationComponent {
  constructor() { }
}
