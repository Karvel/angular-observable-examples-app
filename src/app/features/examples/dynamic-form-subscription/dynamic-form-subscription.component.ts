import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
}                             from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
}                             from '@angular/forms';

import { Subscription }       from 'rxjs';

import { CONSTANTS }          from '../../../core/utils/constants';
import { EmailValidation }    from '../../../core/validation/email-validation';
import { PasswordValidation } from '../../../core/validation/password-validation';

@Component({
  selector        : 'app-dynamic-form-subscription',
  templateUrl     : './dynamic-form-subscription.component.html',
  styleUrls       : ['./dynamic-form-subscription.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class DynamicFormSubscriptionComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', Validators.compose([EmailValidation.validEmail(true)])],
        confirmEmail: ['', Validators.compose([EmailValidation.validEmail(true)])],
        password: ['', Validators.compose([PasswordValidation.validPassword(true)])],
        passwordMin: { value: false, disabled: true, },
        passwordDigit: { value: false, disabled: true, },
        passwordSpecial: { value: false, disabled: true, },
      },
      {
        validator: Validators.compose([EmailValidation.validEmailConfirm('email', 'confirmEmail')])
      },
    );
  }

  ngOnInit(): void {
    this.setupConditionalValidators();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public get email(): AbstractControl {
    return this.registerForm.get('email') as AbstractControl;
  }

  public get confirmEmail(): AbstractControl {
    return this.registerForm.get('confirmEmail') as AbstractControl;
  }

  public get password(): AbstractControl {
    return this.registerForm.get('password') as AbstractControl;
  }

  public get passwordMin(): AbstractControl {
    return this.registerForm.get('passwordMin') as AbstractControl;
  }

  public get passwordDigit(): AbstractControl {
    return this.registerForm.get('passwordDigit') as AbstractControl;
  }

  public get passwordSpecial(): AbstractControl {
    return this.registerForm.get('passwordSpecial') as AbstractControl;
  }

  private setupConditionalValidators(): void {
    const passwordControlSubscription: Subscription = this.password.valueChanges.subscribe((controlValue: string) => {
      (controlValue.length >= 8)
        ? this.passwordMin.setValue(true)
        : this.passwordMin.setValue(false);
      (CONSTANTS.SYMBOL_REGEX.test(controlValue))
        ? this.passwordSpecial.setValue(true)
        : this.passwordSpecial.setValue(false);
      (CONSTANTS.DIGIT_REGEX.test(controlValue))
        ? this.passwordDigit.setValue(true)
        : this.passwordDigit.setValue(false);
    });

    this.subscriptions.push(passwordControlSubscription);
  }
}
