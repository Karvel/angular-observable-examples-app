import {
  NgModule,
  Optional,
  SkipSelf,
}                               from '@angular/core';
import { CommonModule }         from '@angular/common';

import { ApiModule }            from './api/api.module';
import { FormService }          from './services/form.service';
import { PipeModule }           from './pipes/pipe.module';
import { throwIfAlreadyLoaded } from './guards/module-import-guard.service';
import { TodoService }          from './services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    PipeModule,
  ],
  providers: [
    FormService,
    TodoService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
