import { NgModule }                                    from '@angular/core';
import { RouterModule, Routes }                        from '@angular/router';

import { ColdExample1Component }                       from './cold-example-1/cold-example-1.component';
import { ColdExample2PresentationComponent }           from './cold-example-2/cold-example-2-presentation.component';
import { ColdExample2SmartComponent }                  from './cold-example-2/cold-example-2-smart.component';
import { ConditionalValidationComponent }              from './conditional-validation/conditional-validation.component';
import { DynamicFormSubscriptionComponent }            from './dynamic-form-subscription/dynamic-form-subscription.component';
import { ExamplesRouterComponent }                     from './examples-router.component';
import { HigherOrderObservablesSmartComponent }        from './higher-order-observables/higher-order-observables-smart.component';
import { HigherOrderObservablesPresentationComponent } from './higher-order-observables/higher-order-observables-presentation.component';
import { HotExample1Component }                        from './hot-example-1/hot-example-1.component';
import { PitfallFixesPresentationComponent }           from './pitfall-fixes/pitfall-fixes-presentation.component';
import { PitfallFixesSmartComponent }                  from './pitfall-fixes/pitfall-fixes-smart.component';
import { PitfallsPresentationComponent }               from './pitfalls/pitfalls-presentation.component';
import { PitfallsSmartComponent }                      from './pitfalls/pitfalls-smart.component';

const routes: Routes = [
 {
   path       : 'examples',
   component : ExamplesRouterComponent,
   data      : { title: 'Examples' },
   children  : [
    {
      path       : '',
      redirectTo : 'cold-1',
      pathMatch  : 'full',
    },
    {
      path      : 'cold-1',
      component : ColdExample1Component,
      data      : { title: 'Cold Example 1' },
    },
    {
      path      : 'cold-2',
      component : ColdExample2SmartComponent,
      data      : { title: 'Cold Example 2' },
    },
    {
      path      : 'hot-1',
      component : HotExample1Component,
      data      : { title: 'Hot Example 1' },
    },
    {
      path      : 'higher-order',
      component : HigherOrderObservablesSmartComponent,
      data      : { title: 'Higher Order Operators' },
    },
    {
      path      : 'conditional-validation',
      component : ConditionalValidationComponent,
      data      : { title: 'Conditional Validation' },
    },
    {
      path      : 'dynamic-form',
      component : DynamicFormSubscriptionComponent,
      data      : { title: 'Dynamic Form' },
    },
    {
      path      : 'pitfalls',
      component : PitfallsSmartComponent,
      data      : { title: 'Pitfalls' },
    },
    {
      path      : 'pitfall-fixes',
      component : PitfallFixesSmartComponent,
      data      : { title: 'Pitfall Fixes' },
    },
   ],
 },
];

@NgModule({
  imports : [ RouterModule.forChild(routes) ],
  exports : [ RouterModule ]
})
export class ExamplesRoutingModule {}

export const routedComponents = [
  ExamplesRouterComponent,
  ColdExample1Component,
  ColdExample2PresentationComponent,
  ColdExample2SmartComponent,
  ConditionalValidationComponent,
  DynamicFormSubscriptionComponent,
  HigherOrderObservablesPresentationComponent,
  HigherOrderObservablesSmartComponent,
  HotExample1Component,
  PitfallsPresentationComponent,
  PitfallsSmartComponent,
  PitfallFixesPresentationComponent,
  PitfallFixesSmartComponent,
];
