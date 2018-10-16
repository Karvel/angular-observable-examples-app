import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { BrowserModule }             from '@angular/platform-browser';
import { HttpClientModule }          from '@angular/common/http';
import { MaterialModule }            from './core/imports/material.module';
import { NgModule }                  from '@angular/core';
import { ReactiveFormsModule }       from '@angular/forms';

import { AngularFireModule }         from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastrModule }              from 'ngx-toastr';

import { AppComponent }              from './app.component';
import {
  AppRoutingModule,
  routedComponents as mainAppRoutedComponents,
}                                    from './app-routing.module';
import { ControlsModule }            from './core//controls/controls.module';
import { CoreModule }                from './core/core.module';
import { environment }               from '../environments/environment';
import { ExamplesModule }            from './features/examples/examples.module';
import { FooterComponent }           from './features/footer/footer.component';
import { NavigationComponent }       from './features/navigation/navigation.component';
import { PipeModule }                from './core/pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    mainAppRoutedComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ControlsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    MaterialModule,
    PipeModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
