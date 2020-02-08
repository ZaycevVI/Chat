import { withFormik } from "formik";
import {registrationValidation} from "helpers/form-validator";

const withRegistrationFormik = withFormik({
  mapPropsToValues: () => ({ name: "", password: "", confirmPassword: "", email: "" }),
  validate: values => {
    const errors = {};
    registrationValidation(values, errors);

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegistrationForm"
});

export default withRegistrationFormik;
