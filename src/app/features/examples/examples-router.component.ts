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
  private parentRoute: string = '/examples/';
  public navLinks = [
    {
      path  : `${this.parentRoute}cold-1`,
      label : 'Cold Observables 1',
    },
    {
      path  : `${this.parentRoute}cold-2`,
      label : 'Cold Observables 2',
    },
    {
      path  : `${this.parentRoute}hot-1`,
      label : 'Hot Observables 1',
    },
    {
      path  : `${this.parentRoute}higher-order`,
      label : 'Higher Order',
    },
    {
      path  : `${this.parentRoute}higher-order-2`,
      label : 'Higher Order 2',
    },
    {
      path  : `${this.parentRoute}pitfalls`,
      label : 'Pitfalls',
    },
    {
      path  : `${this.parentRoute}pitfall-fixes`,
      label : 'Pitfall Fixes',
    },
    {
      path  : `${this.parentRoute}conditional-validation`,
      label : 'Conditional Validation',
    },
    {
      path  : `${this.parentRoute}dynamic-form`,
      label : 'Dynamic Forms',
    },
  ];
  constructor() { }
}
