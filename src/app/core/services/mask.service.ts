import { Injectable } from '@angular/core';

import { CONSTANTS }  from '../utils/constants';

@Injectable()
export class MaskService {
  public maskPhone(input: string): string {
    const maskedInput = input.replace(CONSTANTS.NON_DECIMAL_DIGITS, '').match(CONSTANTS.PHONE_REGEX_MASK);
    input = !maskedInput[2]
      ? maskedInput[1]
      : '(' + maskedInput[1] + ') ' + maskedInput[2] + (maskedInput[3]
        ? '-' + maskedInput[3]
        : '');

    return input;
  }
}
