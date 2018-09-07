interface Constants {
  readonly EMAIL_REGEX: RegExp;
}

export const CONSTANTS: Constants = {
  EMAIL_REGEX : /^(?!\.)(?!.*?\.(\.|@))[\w\d.!#$%&'*+\-\/=?^_`{|}~]+@[\w\d.-]+\.[\w\d]{2,}$/,
};
