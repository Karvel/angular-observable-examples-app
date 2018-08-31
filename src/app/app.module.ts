import { BrowserModule }       from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
