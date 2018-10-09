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
    {
      route : 'hot-1',
      label : 'Hot Observables 1',
    },
    {
      route : 'higher-order',
      label : 'Higher Order Operators',
    },
    {
      route : 'conditional-validation',
      label : 'Conditional Validation',
    },
    {
      route : 'dynamic-form',
      label : 'Dynamic Form Subscription',
    },
  ];
  constructor() { }
}
