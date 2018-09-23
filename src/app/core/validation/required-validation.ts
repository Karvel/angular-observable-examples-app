import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class RequiredValidation {
  static required(placeholder: string = 'This field'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const condition: boolean = !control.value && control.value !== 0;

      return condition ? { 'isRequired': `${placeholder} is required.` } : null ;
    };
  }
}
