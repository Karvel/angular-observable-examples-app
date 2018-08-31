import { NgModule }     from '@angular/core';

import { SafeHTMLPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    SafeHTMLPipe,
  ],
  exports: [
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
