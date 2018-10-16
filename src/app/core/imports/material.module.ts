import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatTabsModule,
}                   from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
  ],
})
export class MaterialModule { }
