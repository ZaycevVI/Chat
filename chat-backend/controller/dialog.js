const withErrorHandler = require("../utils/helpers/error-handler-proxy");
const dialogService = require("../utils/services/dialog");

class DialogController {
  static async create(req, res) {
    const { userFrom, userTo } = req.body;

    const newDlg = await dialogService.create(userFrom, userTo);

    res.json(newDlg);
  }

  static async getDialogsByUserId(req, res) {
    const { id } = req.params;

    const dialogs = await dialogService.getDialogsByUserId(id);

    res.json(dialogs);
  }
}

module.exports = withErrorHandler(DialogController);
