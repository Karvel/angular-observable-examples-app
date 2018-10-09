import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
}                              from '@angular/forms';

import {
  ExamplesRoutingModule,
  routedComponents as examplesRoutedComponents,
}                              from './examples-routing.module';
import { ControlsModule }      from '../../core//controls/controls.module';
import { MaterialModule }      from '../../core/imports/material.module';
import { PipeModule }          from '../../core/pipes/pipe.module';

@NgModule({
  declarations: [
    examplesRoutedComponents,
  ],
  imports: [
    CommonModule,
    ControlsModule,
    PipeModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ExamplesRoutingModule,
  ],
})
export class ExamplesModule { }
