import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { MaterialModule }         from '../imports/material.module';
import { RequiredInputComponent } from './required-input/required-input.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RequiredInputComponent,
  ],
  exports: [
    RequiredInputComponent,
  ],
})
export class ControlsModule { }
