import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent }    from './features/not-found/not-found.component';
import { ResourcesComponent }   from './features/resources/resources.component';
import { StartComponent } from './features/start/start.component';

const routes: Routes = [
  {
    path       : '',
    redirectTo : 'examples',
    pathMatch  : 'full',
  },
  {
   path      : 'resources',
   component : ResourcesComponent,
   data      : { title: 'Resources' },
  },
  {
   path      : 'start',
   component : StartComponent,
   data      : { title: 'Start' },
  },
  {
   path      : '**',
   component : NotFoundComponent,
   data      : { title: 'Not Found' },
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routedComponents = [
  NotFoundComponent,
  ResourcesComponent,
  StartComponent
];
