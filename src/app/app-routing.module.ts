import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }     from './features/contact/contact.component';
import { HomeComponent }        from './features/home/home.component';
import { NotFoundComponent }    from './features/not-found/not-found.component';

const routes: Routes = [
 {
   path      : '',
   component : HomeComponent,
 },
 {
   path      : 'contact',
   component : ContactComponent,
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
  ContactComponent,
  NotFoundComponent,
];
