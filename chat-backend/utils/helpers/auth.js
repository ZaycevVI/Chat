const jwt = require("express-jwt");

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

module.exports = auth;
