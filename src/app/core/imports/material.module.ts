import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
}                   from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
})
export class MaterialModule { }
