import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import {
  ExamplesRoutingModule,
  routedComponents as examplesRoutedComponents,
}                              from './examples-routing.module';
import { MaterialModule }      from '../../core/imports/material.module';
import { PipeModule }          from '../../core/pipes/pipe.module';

@NgModule({
  declarations: [
    examplesRoutedComponents,
  ],
  imports: [
    CommonModule,
    PipeModule.forRoot(),
    MaterialModule,
    FormsModule,
    ExamplesRoutingModule,
  ],
})
export class ExamplesModule { }
