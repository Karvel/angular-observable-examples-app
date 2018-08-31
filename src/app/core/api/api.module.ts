import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { apiProviders } from './api.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    apiProviders,
  ],
})
export class ApiModule { }
