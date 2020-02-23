const Message = require("../../schema/message");

class MessageService {
  async create(text, date, userId, dialogId) {
    return await Message.create({ text, date, userId, dialogId });
  }

  async getByDialogId(dialogId) {
    return (
      (await Message.find({ dialogId })
        .populate("userId")
        .populate("dialogId")
        .exec()) || []
    );
  }

  async getLastMessage(dialogId) {
    const [lastMsg] = await Message.find({ dialogId })
      .sort({ date: -1 })
      .limit(1)
      .populate("userId")
      .populate("dialogId")
      .exec();

    return lastMsg || null;
  }
}

module.exports = new MessageService();
