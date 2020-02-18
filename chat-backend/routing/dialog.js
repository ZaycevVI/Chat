const DialogController = require('../controller/dialog')

module.exports = {
    routes: [
        {
            url: "/dialogs",
            controller: DialogController.create,
            method: "post",
            auth: true
        },
        {
            url: "/users/:id/dialogs",
            controller: DialogController.getDialogsByUserId,
            method: "get",
            auth: true
        }
    ]
}