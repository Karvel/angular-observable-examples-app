interface Constants {
  readonly emailPattern: RegExp;
}

export const CONSTANTS: Constants = {
  emailPattern: /^(?!\.)(?!.*?\.(\.|@))[\w\d.!#$%&'*+\-\/=?^_`{|}~]+@[\w\d.-]+\.[\w\d]{2,}$/,
};
