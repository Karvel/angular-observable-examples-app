import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './features/about/about.component';
import { ContactComponent }     from './features/contact/contact.component';
import { HomeComponent }        from './features/home/home.component';
import { ResourcesComponent }   from './features/resources/resources.component';
import { NotFoundComponent }    from './features/not-found/not-found.component';

const routes: Routes = [
 {
   path      : '',
   component : HomeComponent,
 },
 {
   path      : 'about',
   component : AboutComponent,
 },
 {
   path      : 'contact',
   component : ContactComponent,
 },
 {
   path      : 'resources',
   component : ResourcesComponent,
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
  AboutComponent,
  HomeComponent,
  ContactComponent,
  NotFoundComponent,
  ResourcesComponent,
];
