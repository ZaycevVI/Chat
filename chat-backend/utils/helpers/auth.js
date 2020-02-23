const jwt = require("express-jwt");
const jwtToken = require("jsonwebtoken");
const config = require("../../config");

const getTokenFromHeaders = req => {
  const {
    headers: { authorization }
  } = req;
  return authorization;
};

const auth = {
  required: jwt({
    secret: config.secret,
    userProperty: "currentUser",
    getToken: getTokenFromHeaders,
    property: "user"
  }),
  optional: jwt({
    secret: config.secret,
    userProperty: "currentUser",
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  })
};

function generateJWT(user, expiration) {
    return jwtToken.sign(
      {
        email: user.email,
        id: user._id,
        expiration: Date.now() + expiration
      },
      config.secret,
      { expiresIn: (expiration / 1000) }
    );
  }

module.exports = {auth, generateJWT};
