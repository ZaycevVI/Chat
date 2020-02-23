import {UserService} from 'services/user-service';

const initialState = {
  user: UserService.user
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONSTANT.START_LOGIN_REQUEST:
      return state;
    case CONSTANT.START_REGISTRATION_REQUEST:
      return state;
    case CONSTANT.END_AUTH_REQUEST: {
      UserService.user = payload;
      return { ...state, user: payload };
    }
    case CONSTANT.LOGOUT_USER: {
      UserService.user = null;
      return { ...state, user: null };
    }
    default:
      return state;
  }
};

export const CONSTANT = {
  START_LOGIN_REQUEST: "START_LOGIN_REQUEST",
  START_REGISTRATION_REQUEST: "START_REGISTRATION_REQUEST",
  END_AUTH_REQUEST: "END_LOGIN_REQUEST",
  LOGOUT_USER: "LOGOUT_USER"
};
