import { NgModule }                          from '@angular/core';
import { RouterModule, Routes }              from '@angular/router';

import { ColdExample1Component }             from './cold-example-1/cold-example-1.component';
import { ColdExample2PresentationComponent } from './cold-example-2/cold-example-2-presentation.component';
import { ColdExample2SmartComponent }        from './cold-example-2/cold-example-2-smart.component';
import { ExamplesRouterComponent }           from './examples-router.component';

const routes: Routes = [
 {
   path       : 'examples',
   component : ExamplesRouterComponent,
   data      : { title: 'Examples' },
   children  : [
    {
      path       : 'cold-1',
      component : ColdExample1Component,
      data      : { title: 'Cold Example 1' },
    },
    {
      path       : 'cold-2',
      component : ColdExample2SmartComponent,
      data      : { title: 'Cold Example 2' },
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
];
