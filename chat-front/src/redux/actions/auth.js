import * as authCreator from "creators/auth";
import userService from "services/user-service";

export const login = (email, password) => dispatch => {
  dispatch(authCreator.startLoginCreator());

  return userService
    .login(email, password)
    .then(user => dispatch(authCreator.endAuthCreator(user)));
};

export const registration = (name, email, password) => dispatch => {
    dispatch(authCreator.startRegistrationCreator());
  
    return userService
      .registration(name, email, password)
      .then(user => dispatch(authCreator.endAuthCreator(user)));
  };

export const logout = () => dispatch => dispatch(authCreator.logoutCreator());