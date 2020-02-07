import { withFormik } from "formik";
import validate from "helpers/form-validator";

const withLoginFormik = withFormik({
  mapPropsToValues: () => ({ name: "", password: "" }),
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

  displayName: "LoginForm"
});

export default withLoginFormik;
