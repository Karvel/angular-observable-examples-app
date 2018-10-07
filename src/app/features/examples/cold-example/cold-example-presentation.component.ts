import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-cold-example-presentation',
  templateUrl     : './cold-example-presentation.component.html',
  styleUrls       : ['./cold-example-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ColdExamplePresentationComponent {
  constructor() { }
}
