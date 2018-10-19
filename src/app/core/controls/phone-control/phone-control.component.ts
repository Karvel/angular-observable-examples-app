import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
}                          from '@angular/core';
import {
  AbstractControl,
  FormGroup,
}                          from '@angular/forms';

import { PhoneValidation } from '../../validation/phone-validation';

@Component({
  selector        : 'app-phone-control',
  templateUrl     : './phone-control.component.html',
  styleUrls       : ['./phone-control.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PhoneControlComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public formControlTitle: string;
  @Input() public isRequired: boolean = false;
  @Input() public placeholder: string = 'Phone Number';

  constructor() { }

  ngOnInit(): void {
    this.createValidators();
  }

  private createValidators(): void {
    (this.form.get(this.formControlTitle) as AbstractControl).setValidators([PhoneValidation.validPhone(this.isRequired)]);
    (this.form.get(this.formControlTitle) as AbstractControl).updateValueAndValidity();
  }
}
