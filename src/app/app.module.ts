import { BrowserModule }       from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule }            from '@angular/core';

import { AppComponent }        from './app.component';
import {
  AppRoutingModule,
  routedComponents as mainAppRoutedComponents,
}                              from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    mainAppRoutedComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
