import {
  Directive,
  ElementRef,
  HostListener,
  Input,
}                      from '@angular/core';
import { FormGroup }   from '@angular/forms';

import { MaskService } from '../../core/services/mask.service';

@Directive({
  selector: '[appMask]',
})
export class MaskDirective {
  @Input() public appMask: string;
  @Input() public maskForm: FormGroup;
  @Input() public maskFormControlName: string;

  @HostListener('input') onInput(): void {
    this.applyMask();
  }

  @HostListener('paste') onPaste(): void {
    this.applyMask();
  }

  constructor(
    public el: ElementRef,
    public maskService: MaskService,
  ) { }

  private applyMask(): void {
    switch (this.appMask) {
      case 'phone':
        this.maskForm.get(this.maskFormControlName).setValue(this.maskService.maskPhone(this.el.nativeElement.value));
        break;
    }
  }
}
