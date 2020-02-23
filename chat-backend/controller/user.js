const userService = require("../utils/services/user");
const withErrorHandler = require("../utils/helpers/error-handler-proxy");

class UserController {
  static async registration(req, res) {
    const { name, email, password } = req.body;
    let jwt;

    try{
      jwt = await userService.registration(email, name, password);
      res.json(jwt);
    } catch (e) {
      res.status(400).json({error: e.message});
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    let jwt;
    try {
      jwt = await userService.login(email, password);
      res.json(jwt);
    } catch (e) {
      res.status(401).json({error: e.message});
    }
  }

  static async token(req, res) {
    const { refreshToken } = req.body;
    let newTokens;
    try {
      newTokens = await userService.refreshToken(refreshToken);
      res.json(newTokens);
    } catch (e) {
      res.status(401).json({error: e.message});
    }
  }
}

module.exports = withErrorHandler(UserController);
