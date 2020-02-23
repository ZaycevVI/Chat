const crypto = require("crypto");
const User = require("../../schema/user");
const generateHash = require("../helpers/hash");
const { passwordValidator } = require("../../utils/helpers/validator");
const jwtToken = require("jsonwebtoken");
const { generateJWT } = require("../../utils/helpers/auth");
const config = require('../../config')

class UserService {
  async login(email, password) {
    const user = await User.findOne({ email }).select('+password +salt').exec();
    const passwordHash = generateHash(password, user.salt);

    if (user.password !== passwordHash) {
      throw new Error("Auth failed");
    }

    return user.toAuthJson();
  }

  async registration(email, name, password) {
    if (passwordValidator(password)) {
      throw new Error("Password not valid.");
    }

    if (await User.findOne({ email })) {
      throw new Error(`User with email:${email} already registered.`);
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const user = await User.create({
      email,
      name,
      password: generateHash(password, salt),
      salt
    });

    return user.toAuthJson();
  }

  async refreshToken(token) {
    const jwt = jwtToken.verify(token, config.secret);
    const user = { id: jwt.id, email: jwt.email };

    const accessToken = generateJWT(user, config.expireInMs);
    const refreshToken = generateJWT(user, config.expireRefreshInMs);

    return {
      accessToken,
      refreshToken
    };
  }
}

module.exports = new UserService();
