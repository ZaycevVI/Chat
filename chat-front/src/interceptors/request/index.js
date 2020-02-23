import userService, { UserService } from "services/user-service";
import { logout } from "actions/auth";

const excludedUrls = ["api/token", "api/user/login", "api/user/registration",];

export const auth = function(store) {
  return async config => {
    if (!excludedUrls.some(url => config.url.includes(url))) {
      let token = UserService.accessToken;
      let expiresIn = UserService.expiresIn;

      if (Date.now() - 30000 > expiresIn) {
        let response;

        try {
          response = await userService.refreshToken();
        } catch (e) {
          logout()(store.dispatch);
          return config;
        }

        UserService.refreshToken = response.refreshToken;
        token = UserService.accessToken = response.accessToken;
      }

      if (token) {
        config.headers.common["Authorization"] = token;
      }
    }

    return config;
  };
};
