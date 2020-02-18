const userService = require("../utils/services/user");
const withErrorHandler = require("../utils/helpers/error-handler-proxy");

class UserController {
  static async registration(req, res) {
    const { name, email, password } = req.body;

    const jwt = await userService.registration(email, name, password);

    res.json(jwt);
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const jwt = await userService.login(email, password);

    res.json(jwt);
  }

  static async token(req, res) {
    const { refreshToken } = req.body;
    let newTokens;
    try {
      newTokens = await userService.refreshToken(refreshToken);
    } catch (e) {
      res.status(401).json(e);
    }

    res.json(newTokens);
  }
}

module.exports = withErrorHandler(UserController);
