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

import { CONSTANTS }          from '../../core/utils/constants';
import { EmailValidation }    from '../../core/validation/email-validation';
import { PasswordValidation } from '../../core/validation/password-validation';

@Component({
  selector        : 'app-register',
  templateUrl     : './register.component.html',
  styleUrls       : ['./register.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', Validators.compose([EmailValidation.validEmail()])],
        confirmEmail: ['', Validators.compose([])],
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
    return this.registerForm.get('email');
  }

  public get confirmEmail(): AbstractControl {
    return this.registerForm.get('confirmEmail');
  }

  public get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  public get passwordMin(): AbstractControl {
    return this.registerForm.get('passwordMin');
  }

  public get passwordDigit(): AbstractControl {
    return this.registerForm.get('passwordDigit');
  }

  public get passwordSpecial(): AbstractControl {
    return this.registerForm.get('passwordSpecial');
  }

  private setupConditionalValidators(): void {
    const passwordControlSubscription: Subscription = this.password.valueChanges.subscribe((formChanges: string) => {
      (formChanges.length >= 8)
        ? this.passwordMin.setValue(true, { onlySelf: true })
        : this.passwordMin.setValue(false, { onlySelf: true });
      (CONSTANTS.SYMBOL_REGEX.test(formChanges))
        ? this.passwordSpecial.setValue(true, { onlySelf: true })
        : this.passwordSpecial.setValue(false, { onlySelf: true });
      (CONSTANTS.DIGIT_REGEX.test(formChanges))
        ? this.passwordDigit.setValue(true, { onlySelf: true })
        : this.passwordDigit.setValue(false, { onlySelf: true });
    });

    this.subscriptions.push(passwordControlSubscription);
  }
}
