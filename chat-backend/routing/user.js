const UserController = require("../controller/user");

module.exports = {
    routes: [
        {
            url: "user/login",
            controller: UserController.login,
            method: "post"
        },
        {
            url: "user/registration",
            controller: UserController.registration,
            method: "post"
        },
        {
            url: "token",
            controller: UserController.token,
            method: "post"
        },
    ]
}