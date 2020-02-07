import React from "react";
import { Form, Button } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import withLoginFormik from "hocs/withLoginFormik";
import FormInput from "components/form-input";

function LoginForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty
  } = props;

  return (
    <>
      <h1>Login to your account</h1>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormInput
          validity={{ touched, errors, key: "name" }}
          iconType="user"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Username"
        />
        <FormInput
          validity={{ touched, errors, key: "password" }}
          iconType="lock"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        <Form.Item>
          <Button
            disabled={!isValid || !dirty}
            type="primary"
            htmlType="submit"
            size="large"
            className="login-form-button"
          >
            Log in
          </Button>
          <Link to="/registration">Registration</Link>
        </Form.Item>
      </Form>
    </>
  );
}

const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

export default withLoginFormik(WrappedLoginForm);
