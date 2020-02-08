const getRegistrationRules = errors => {
  return {
    name: value => {
      if (!value) {
        errors.name = "Name is required field.";
      } else if (value.length < 6) {
        errors.name = "Name should contain at least 6 symbols.";
      }
    },
    password: (value, values) => {
      if (!value) {
        errors.password = "Password is required field.";
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
        errors.password =
          "Password should contain 6 characters, at least one number and letter.";
      }

      if (value === values.confirmPassword) {
        delete errors.confirmPassword;
      }
    },
    confirmPassword: (value, values) => {
      if (value !== values.password) {
        errors.confirmPassword = "Two passwords doesn't match.";
      }
    },
    email: value => {
      if (!value) {
        errors.email = "Email is required field.";
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        )
      ) {
        errors.email = "Input doesn't match email pattern.";
      }
    }
  };
};

const getLoginRules = errors => {
  return {
    password: value => {
      if (!value) {
        errors.password = "Password is required field.";
      }
    },
    email: value => {
      if (!value) {
        errors.email = "Email is required field.";
      } 
    }
  };
};

const executeRules = (values, rules) => Object.keys(values).forEach(
  key => rules[key] && rules[key](values[key], values)
);

export const loginValidation = (values, errors) => {
  const rules = getLoginRules(errors);
  executeRules(values, rules);
};

export const registrationValidation = (values, errors) => {
  const rules = getRegistrationRules(errors);
  executeRules(values, rules);
};


