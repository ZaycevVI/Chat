const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouting = require("./routing/user");
const messageRouting = require("./routing/message");
const dialogRouting = require("./routing/dialog");
const errorHandler = require("./middleware/error-handler");
const {auth} = require("./utils/helpers/auth");
const loggerMiddleware = require('./middleware/logger')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(errorHandler);

mongoose.connect("mongodb://localhost:27017/chat", { useNewUrlParser: true });

routeRegistration(userRouting, messageRouting, dialogRouting);

app.listen(3027, function() {
  console.log("Example app listening on port 3027!");
});

function routeRegistration(...routeConfig) {
  routeConfig.forEach(conf => {
    conf.routes.forEach(r =>
      app[r.method](r.url, r.auth ? auth.required : auth.optional, r.controller)
    );
  });
}
