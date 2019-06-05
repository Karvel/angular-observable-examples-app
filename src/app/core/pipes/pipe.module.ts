import { NgModule }           from '@angular/core';

import { FirstFormErrorPipe } from './first-form-error.pipe';
import { MaskDirective }      from '../directives/mask.directive';
import { SafeHTMLPipe }       from './safe-html.pipe';


@NgModule({
  declarations: [
    FirstFormErrorPipe,
    MaskDirective,
    SafeHTMLPipe,
  ],
  exports: [
    FirstFormErrorPipe,
    MaskDirective,
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
