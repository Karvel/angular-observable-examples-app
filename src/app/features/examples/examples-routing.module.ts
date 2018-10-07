import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';

import { ColdExamplePresentationComponent } from './cold-example/cold-example-presentation.component';
import { ColdExampleSmartComponent }        from './cold-example/cold-example-smart.component';
import { ExamplesRouterComponent }          from './examples-router.component';

const routes: Routes = [
 {
   path       : 'examples',
   component : ExamplesRouterComponent,
   data      : { title: 'Examples' },
   children  : [
    {
      path       : 'cold',
      component : ColdExampleSmartComponent,
      data      : { title: 'Cold' },
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
  ColdExamplePresentationComponent,
  ColdExampleSmartComponent,
];
