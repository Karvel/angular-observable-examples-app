import {
  Component,
  Input,
  OnInit,
}                          from '@angular/core';
import { FormGroup }       from '@angular/forms';

import { EmailValidation } from '../../validation/email-validation';

@Component({
  selector    : 'app-email-control',
  templateUrl : './email-control.component.html',
  styleUrls   : ['./email-control.component.scss'],
})
export class EmailControlComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public formControlTitle: string;
  @Input() public isRequired: boolean = false;
  @Input() public placeholder: string = 'Email';

  constructor() { }

  ngOnInit(): void {
    this.createValidators();
  }

  private createValidators(): void {
    this.form.get(this.formControlTitle).setValidators([EmailValidation.validEmail(this.isRequired)]);
    this.form.get(this.formControlTitle).updateValueAndValidity();
  }
}
