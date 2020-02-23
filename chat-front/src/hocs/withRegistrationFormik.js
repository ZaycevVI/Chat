import { withFormik } from "formik";
import { registrationValidation } from "helpers/form-validator";

const withRegistrationFormik = withFormik({
  mapPropsToValues: () => ({
    name: "",
    password: "",
    confirmPassword: "",
    email: ""
  }),
  validate: values => {
    const errors = {};
    registrationValidation(values, errors);

    return errors;
  },

  handleSubmit: async (
    { email, password, name },
    { props: { registration, history }, setSubmitting }
  ) => {
    await registration(name, email, password)
    history.push("/home");
    setSubmitting(false);
  },

  displayName: "RegistrationForm"
});

export default withRegistrationFormik;
