import { withFormik } from "formik";
import {loginValidation} from "helpers/form-validator";

const withLoginFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validate: values => {
    const errors = {};
    loginValidation(values, errors);

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "LoginForm"
});

export default withLoginFormik;
