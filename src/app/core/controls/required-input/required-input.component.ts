import {
  Component,
  Input,
  OnInit,
}                             from '@angular/core';
import { FormGroup }          from '@angular/forms';

import { RequiredValidation } from '../../validation/required-validation';

@Component({
  selector    : 'app-required-input',
  templateUrl : './required-input.component.html',
  styleUrls   : ['./required-input.component.scss'],
})
export class RequiredInputComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public formControlTitle: string;
  @Input() public placeholder: string = 'This field';

  constructor() { }

  ngOnInit(): void {
    this.createValidators();
  }

  private createValidators(): void {
    this.form.get(this.formControlTitle).setValidators([RequiredValidation.required(this.placeholder)]);
    this.form.get(this.formControlTitle).updateValueAndValidity();
  }
}
