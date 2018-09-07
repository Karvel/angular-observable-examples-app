import { NgModule }           from '@angular/core';

import { FirstFormErrorPipe } from './first-form-error.pipe';
import { SafeHTMLPipe }       from './safe-html.pipe';


@NgModule({
  declarations: [
    FirstFormErrorPipe,
    SafeHTMLPipe,
  ],
  exports: [
    FirstFormErrorPipe,
    SafeHTMLPipe,
  ],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
    };
  }
}
