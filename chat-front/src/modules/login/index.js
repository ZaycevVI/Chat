import React from "react";
import { Form, Button, Spin } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import withLoginFormik from "hocs/withLoginFormik";
import FormInput from "components/form-input";
import { connect } from "react-redux";
import { login } from "actions/auth";

function LoginForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    isSubmitting,
    login
  } = props;
  return (
    <>
      <h1>Login to your account</h1>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormInput
          validity={{ touched, errors, key: "email" }}
          iconType="mail"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email"
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
          <Spin spinning={isSubmitting}>
            <Button
              disabled={!isValid || !dirty}
              type="primary"
              htmlType="submit"
              size="large"
              className="login-form-button"
            >
              Log in
            </Button>
          </Spin>
          <Link to="/registration">Registration</Link>
        </Form.Item>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  login
};

const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

export default connect(
  null,
  mapDispatchToProps
)(withLoginFormik(WrappedLoginForm));
