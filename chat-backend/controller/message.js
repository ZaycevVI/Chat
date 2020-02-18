const withErrorHandler = require("../utils/helpers/error-handler-proxy");
const messageService = require("../utils/services/message");

class MessageController {
  static async create(req, res) {
    const { text, date, userId, dialogId } = req.body;

    const newMsg = await messageService.create(text, date, userId, dialogId);

    res.json({ id: newMsg._id });
  }

  static async getByDialogId(req, res) {
      const {id} = req.params;

      const messages = await messageService.getByDialogId(id);

      res.json(messages);
  }

  static async getLastMessage(req, res) {
    const {id} = req.params;

    const msg = await messageService.getLastMessage(id);

    res.json(msg);
  }
}

module.exports = withErrorHandler(MessageController);
