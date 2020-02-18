const jwt = require("express-jwt");
const jwtToken = require("jsonwebtoken");

const getTokenFromHeaders = req => {
  const {
    headers: { authorization }
  } = req;
  return authorization;
};

const auth = {
  required: jwt({
    secret: "secret",
    userProperty: "currentUser",
    getToken: getTokenFromHeaders,
    property: "user"
  }),
  optional: jwt({
    secret: "secret",
    userProperty: "currentUser",
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  })
};

const secret = "secret";

function generateJWT(user, expiration) {
    return jwtToken.sign(
      {
        email: user.email,
        id: user._id
      },
      secret,
      { expiresIn: expiration }
    );
  }

module.exports = {auth, generateJWT};
