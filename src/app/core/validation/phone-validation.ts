import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
}                    from '@angular/forms';

import { CONSTANTS } from '../utils/constants';

export class PhoneValidation {
  static validPhone(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidPhone' : `Phone num is required.` } : null;
      }
      const strippedValue = control.value.replace(CONSTANTS.NON_DECIMAL_DIGITS, '');
      if (!CONSTANTS.PHONE_REGEX.test(strippedValue)) {
        return { 'invalidPhone' : `Phone number is invalid.` };
      }

      return null;
    };
  }
}
