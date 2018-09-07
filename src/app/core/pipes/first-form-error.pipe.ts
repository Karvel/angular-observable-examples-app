import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstFormError' })
export class FirstFormErrorPipe implements PipeTransform {
 public transform(value: Object): string {
   if (!value) { return ''; }
   if (typeof value !== 'object') { return value; }

   const key: string = value[Object.keys(value)[0]];

   return key;
  }
}
