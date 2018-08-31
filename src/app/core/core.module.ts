import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { PipeModule }                   from './pipes/pipe.module';
import { throwIfAlreadyLoaded }         from './guards/module-import-guard.service';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
