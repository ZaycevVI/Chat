import "./style.scss";
import React from "react";
import { Form, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import withRegistrationFormik from "hocs/withRegistrationFormik";
import FormInput from "components/form-input";
import ConfirmRegistration from "components/email-confirm-registration";
import { registration } from "actions/auth";
import { connect } from "react-redux";

function Registration(props) {
  const isSuccess = false;
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
    registration
  } = props;

  return (
    <>
      <h1>Registration</h1>
      {!isSuccess ? (
        <Form onSubmit={handleSubmit}>
          <FormInput
            validity={{ touched, errors, key: "email" }}
            iconType="mail"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Email"
          />
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
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Password"
          />
          <FormInput
            validity={{ touched, errors, key: "confirmPassword" }}
            iconType="lock"
            type="password"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <Form.Item>
            <Spin spinning={isSubmitting}>
              <Button
                disabled={!isValid || !dirty}
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Spin>
            <Link to="/login">Already have account?</Link>
          </Form.Item>
        </Form>
      ) : (
        <ConfirmRegistration />
      )}
    </>
  );
}

const mapDispatchToProps = {
  registration
};

const WrappedRegistrationForm = Form.create({ name: "register" })(Registration);

export default connect(
  null,
  mapDispatchToProps
)(withRegistrationFormik(WrappedRegistrationForm));
