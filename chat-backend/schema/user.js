mongoose = require("mongoose");
const { String, Boolean } = mongoose.Schema.Types;
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const { emailValidator, nameValidator } = require("../utils/helpers/validator");

const userSchema = new Schema({
  name: { type: String, required: true, validate: nameValidator },
  avatar: { type: String, default: null },
  isOnline: { type: Boolean, default: false },
  email: { type: String, validate: emailValidator },
  password: { type: String },
  salt: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  confirmedHash: String
});

userSchema.methods.toAuthJson = function() {
  return {
    _id: this._id,
    email: this.email,
    token: generateJWT(this)
  };
};

function generateJWT(user) {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: user.email,
      id: user._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    "secret"
  );
}

module.exports = mongoose.model("User", userSchema);
