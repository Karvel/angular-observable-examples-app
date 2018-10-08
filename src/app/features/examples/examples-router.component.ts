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
      route : 'cold-1',
      label : 'Cold Observables 1',
    },
    {
      route : 'cold-2',
      label : 'Cold Observables 2',
    },
  ];
  constructor() { }
}
