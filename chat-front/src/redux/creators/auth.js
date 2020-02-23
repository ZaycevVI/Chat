import { CONSTANT as AUTH_CONSTANT } from "reducers/auth";

export const startLoginCreator = () => {
  return {
    type: AUTH_CONSTANT.START_LOGIN_REQUEST
  };
};

export const startRegistrationCreator = () => {
    return {
      type: AUTH_CONSTANT.START_REGISTRATION_REQUEST
    };
  };

export const endAuthCreator = user => {
  return {
    type: AUTH_CONSTANT.END_AUTH_REQUEST,
    payload: user
  };
};

export const logoutCreator = () => {
  return {
    type: AUTH_CONSTANT.LOGOUT_USER
  };
};
