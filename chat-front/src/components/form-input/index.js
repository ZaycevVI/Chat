import React from "react";
import { Form, Icon, Input } from "antd";
import inputStatus from "helpers/input-status";

const createIcon = type => (
  <Icon type={type} style={{ color: "rgba(0,0,0,.25)" }} />
);

function FormInput({ 
    validity, 
    iconType, 
    value, 
    onBlur, 
    onChange, 
    placeholder,
    type }) {
  const { touched, errors, key } = validity;

  return (
    <Form.Item
      help={touched[key] && errors[key]}
      validateStatus={inputStatus(key, errors, touched)}
    >
      <Input
        name={key}
        type={type}
        prefix={createIcon(iconType)}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default FormInput;
