import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class PasswordValidation {
  static validPassword(isRequired: boolean = false): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidPassword' : `Password is required.` } : null;
      }
      if (control.value.length < 8) {
        return { 'invalidPassword' : `Password is too short.` };
      }

      return null;
    };
  }
}
