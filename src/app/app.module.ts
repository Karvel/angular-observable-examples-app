import { BrowserModule }       from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }        from './app.component';
import {
  AppRoutingModule,
  routedComponents as mainAppRoutedComponents,
}                              from './app-routing.module';
import { CoreModule }          from './core/core.module';
import { NavigationComponent } from './features/navigation/navigation.component';
import { PipeModule }          from './core/pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    mainAppRoutedComponents,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    PipeModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
