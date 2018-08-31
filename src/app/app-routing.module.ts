import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './features/home/home.component';
import { NotFoundComponent }    from './features/not-found/not-found.component';

const routes: Routes = [
 {
   path      : '',
   component : HomeComponent,
 },
 {
   path      : '**',
   component : NotFoundComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routedComponents = [
  HomeComponent,
  NotFoundComponent,
];
