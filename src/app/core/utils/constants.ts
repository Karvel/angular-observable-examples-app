interface Constants {
  readonly DECIMAL_DIGITS_ONLY: RegExp;
  readonly EMAIL_REGEX: RegExp;
  readonly NON_DECIMAL_DIGITS: RegExp;
  readonly PHONE_REGEX: RegExp;
  readonly SYMBOL_REGEX: RegExp;
}

export const CONSTANTS: Constants = {
  DECIMAL_DIGITS_ONLY : /[^0-9.]/g,
  EMAIL_REGEX         : /^(?!\.)(?!.*?\.(\.|@))[\w\d.!#$%&'*+\-\/=?^_`{|}~]+@[\w\d.-]+\.[\w\d]{2,}$/,
  NON_DECIMAL_DIGITS  : /\D/g,
  PHONE_REGEX         : /(^\d{10}$)/,
  SYMBOL_REGEX        : /[^-+_!@#$%^&*,.?]/g,
};
