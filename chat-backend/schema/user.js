mongoose = require("mongoose");
const { String, Boolean } = mongoose.Schema.Types;
const { Schema } = mongoose;
const { generateJWT } = require("../utils/helpers/auth");
const { emailValidator, nameValidator } = require("../utils/helpers/validator");

const userSchema = new Schema({
  name: { type: String, required: true, validate: nameValidator },
  avatar: { type: String, default: null },
  isOnline: { type: Boolean, default: false },
  email: { type: String, validate: emailValidator },
  password: { type: String, select: false },
  salt: { type: String, required: true, select: false },
  confirmed: { type: Boolean, default: false, select: false },
  confirmedHash: { type: String, select: false },
  refreshToken: String
});

const expiresIn = 1000 * 60 * 15; // 15 mins
const refreshExpireIn = 1000 * 60 * 1440 * 15; // 15 days

userSchema.methods.toAuthJson = function() {
  return {
    _id: this._id,
    email: this.email,
    expiresIn: Date.now() + expiresIn,
    accessToken: generateJWT(this, expiresIn),
    refreshToken: generateJWT(this, refreshExpireIn)
  };
};

module.exports = mongoose.model("User", userSchema);
