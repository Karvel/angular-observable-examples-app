import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
}         from '@angular/forms';

import { MaterialModule }              from '../imports/material.module';
import { PipeModule }                  from '../pipes/pipe.module';
import { EmailControlComponent }       from './email-control/email-control.component';
import { PitfallGridControlComponent } from './pitfall-grid-control/pitfall-grid-control.component';
import { PhoneControlComponent }       from './phone-control/phone-control.component';
import { RequiredInputComponent }      from './required-input/required-input.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EmailControlComponent,
    PitfallGridControlComponent,
    PhoneControlComponent,
    RequiredInputComponent,
  ],
  exports: [
    EmailControlComponent,
    PitfallGridControlComponent,
    PhoneControlComponent,
    RequiredInputComponent,
  ],
})
export class ControlsModule { }
