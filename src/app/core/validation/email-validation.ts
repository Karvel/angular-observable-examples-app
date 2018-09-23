import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
}                    from '@angular/forms';

import { CONSTANTS } from '../utils/constants';

export class EmailValidation {
  static validEmail(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidEmail' : `Email is required.` } : null;
      }
      if (!CONSTANTS.EMAIL_REGEX.test(control.value)) {
        return { 'invalidEmail' : `Email is invalid.` };
      }

      return null;
    };
  }

  static validEmailConfirm(emailControlName: string, confirmEmailControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValue: string = control.get(emailControlName).value;
      const confirmEmailValue: string = control.get(confirmEmailControlName).value;
      if (!control.value) {
        control.get(confirmEmailControlName).setErrors({'invalidEmail' : `Confirm Email is required.`});
      }
      if (emailValue !== confirmEmailValue) {
        control.get(confirmEmailControlName).setErrors({'mismatchedEmail': 'Email addresses do not match.'});
      }

      return null;
    };
  }
}
