const validator = require("validator");

function emailValidator(email) {
  return validator.isEmail(email);
}

function passwordValidator(password) {
  //     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  return !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function nameValidator(name) {
  return name.length >= 6;
}

module.exports = {
    emailValidator, 
    passwordValidator,
    nameValidator
}
