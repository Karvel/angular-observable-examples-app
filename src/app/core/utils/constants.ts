interface Constants {
  readonly DECIMAL_DIGITS_ONLY: RegExp;
  readonly DIGIT_REGEX: RegExp;
  readonly EMAIL_REGEX: RegExp;
  readonly NON_DECIMAL_DIGITS: RegExp;
  readonly PHONE_REGEX: RegExp;
  readonly PHONE_REGEX_MASK: RegExp;
  readonly SYMBOL_REGEX: RegExp;
  readonly terminatingCharacter: string;
}

export const CONSTANTS: Constants = {
  DECIMAL_DIGITS_ONLY  : /[^0-9.]/g,
  DIGIT_REGEX          : /[0-9]/,
  EMAIL_REGEX          : /^(?!\.)(?!.*?\.(\.|@))[\w\d.!#$%&'*+\-\/=?^_`{|}~]+@[\w\d.-]+\.[\w\d]{2,}$/,
  NON_DECIMAL_DIGITS   : /\D/g,
  PHONE_REGEX          : /(^\d{10}$)/,
  PHONE_REGEX_MASK     : /(\d{0,3})(\d{0,3})(\d{0,4})/,
  SYMBOL_REGEX         : /[-+_!@#$%^&*,.?]/,
  terminatingCharacter : '\uf8ff',
};
