import { withFormik } from "formik";
import validate from "helpers/form-validator";

const withRegistrationFormik = withFormik({
  mapPropsToValues: () => ({ name: "", password: "", confirmPassword: "", email: "" }),
  validate: values => {
    const errors = {};
    validate(values, errors);

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
