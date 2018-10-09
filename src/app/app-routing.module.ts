import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './features/about/about.component';
import { HomeComponent }        from './features/home/home.component';
import { RegisterComponent }    from './features/register/register.component';
import { ResourcesComponent }   from './features/resources/resources.component';
import { NotFoundComponent }    from './features/not-found/not-found.component';

const routes: Routes = [
 {
   path      : '',
   component : HomeComponent,
   data      : { title: 'Home' },
 },
 {
   path      : 'about',
   component : AboutComponent,
   data      : { title: 'About' },
 },
 {
   path      : 'resources',
   component : ResourcesComponent,
   data      : { title: 'Resources' },
 },
 {
   path      : 'register',
   component : RegisterComponent,
   data      : { title: 'Register' },
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
  AboutComponent,
  HomeComponent,
  NotFoundComponent,
  RegisterComponent,
  ResourcesComponent,
];
