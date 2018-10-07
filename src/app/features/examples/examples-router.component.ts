import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-examples-router',
  templateUrl     : './examples-router.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ExamplesRouterComponent {
  public navLinks = [
    {
      route : 'cold',
      label : 'Cold Observables',
    },
  ];
  constructor() { }
}
