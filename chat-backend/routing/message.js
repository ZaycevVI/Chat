const MessageController = require("../controller/message");

module.exports = {
    routes: [
        {
            url: "/messages",
            controller: MessageController.create,
            method: "post",
            auth: true
        },
        {
            url: "/dialogs/:id/messages",
            controller: MessageController.getByDialogId,
            method: "get",
            auth: true
        },
        {
            url: "/dialogs/:id/lastMessage",
            controller: MessageController.getLastMessage,
            method: "get",
            auth: true
        }
    ]
}