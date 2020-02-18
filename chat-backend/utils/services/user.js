const crypto = require("crypto");
const User = require("../../schema/user");
const generateHash = require("../helpers/hash");
const { passwordValidator } = require("../../utils/helpers/validator");

class UserService {
  async login(email, password) {
    const user = await User.findOne({ email }).exec();
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
}

module.exports = new UserService();
