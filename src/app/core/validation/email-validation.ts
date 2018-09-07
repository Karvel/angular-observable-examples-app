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
        return isRequired ? { 'incorrectEmail' : `Email is required.` } : null;
      }
      if (!CONSTANTS.emailPattern.test(control.value)) {
        return { 'incorrectEmail' : `Email is invalid.` };
      }

      return null;
    };
  }
}
