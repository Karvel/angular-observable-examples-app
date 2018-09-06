import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
}                    from '@angular/forms';

import { CONSTANTS } from '../utils/constants';

export class EmailValidation {
  static email(placeholder: string = 'Email', isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isRequired && !control.value && control.value !== 0) {
        return { 'isRequired' : `${placeholder} is required.` };
      }
      if (control.value && !CONSTANTS.emailPattern.test(control.value)) {
        return { 'email' : `${placeholder} is invalid.` };
      }

      return null;
    };
  }
}
