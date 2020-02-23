import { withFormik } from "formik";
import { loginValidation } from "helpers/form-validator";

const withLoginFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validate: values => {
    const errors = {};
    loginValidation(values, errors);

    return errors;
  },

  handleSubmit: async (
    { email, password },
    { props: { login, history }, setSubmitting }
  ) => {
    await login(email, password);
    history.push("/home");
    setSubmitting(false);
  },

  displayName: "LoginForm"
});

export default withLoginFormik;
