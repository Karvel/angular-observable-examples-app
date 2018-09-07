interface Constants {
  readonly EMAIL_REGEX: RegExp;
  readonly PHONE_REGEX: RegExp;
  readonly NON_DECIMAL_DIGITS: RegExp;
}

export const CONSTANTS: Constants = {
  EMAIL_REGEX        : /^(?!\.)(?!.*?\.(\.|@))[\w\d.!#$%&'*+\-\/=?^_`{|}~]+@[\w\d.-]+\.[\w\d]{2,}$/,
  PHONE_REGEX        : /(^\d{10}$)/,
  NON_DECIMAL_DIGITS : /\D/g,
};
