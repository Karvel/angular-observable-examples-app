import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class RequiredValidation {
  static required(placeholder: string = 'This field'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { 'isRequired': `${placeholder} is required.` };
      }

      return null;
    };
  }
}
