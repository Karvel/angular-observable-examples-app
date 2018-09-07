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
}
