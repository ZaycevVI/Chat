const Dialog = require("../../schema/dialog");

class DialogService {
  async create(userFrom, userTo) {
    if (userFrom === userTo) {
      throw new Error(
        `Owner and partner id's shouldn't be equal (${userFrom})`
      );
    }

    const existingDialogs = await Dialog.find({
      $or: [
        { userFrom, userTo },
        { userFrom: userTo, userTo: userFrom }
      ]
    }).exec();

    if (existingDialogs && existingDialogs.length > 0) {
      throw new Error(
        `Dialog with users ${userFrom} and ${userTo} already exists.`
      );
    }

    return await Dialog.create({ userFrom, userTo });
  }

  async getDialogsByUserId(id) {
    const dialogs = await Dialog.find({
      $or: [{ userFrom: id }, { userTo: id }]
    })
      .populate("userFrom")
      .populate("userTo")
      .exec();

    return dialogs || [];
  }
}

module.exports = new DialogService();
