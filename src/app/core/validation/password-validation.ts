import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
}                    from '@angular/forms';

import { CONSTANTS } from '../utils/constants';

export class PasswordValidation {
  static validPassword(isRequired: boolean = false): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidPassword' : `Password is required.` } : null;
      }
      if (control.value.length < 8) {
        return { 'invalidPassword' : `Password is too short.` };
      }
      if (!CONSTANTS.SYMBOL_REGEX.test(control.value)) {
        return { 'invalidPassword' : `Password requires at least one special character.` };
      }
      if (!CONSTANTS.DIGIT_REGEX.test(control.value)) {
        return { 'invalidPassword' : `Password requires at least one numeric character.` };
      }

      return null;
    };
  }
}
