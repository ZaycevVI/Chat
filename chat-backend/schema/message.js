mongoose = require("mongoose");
const { String, Boolean, Date, ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

const messageSchema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, required: true },
  isRead: { type: Boolean, default: false },
  userId: { type: ObjectId, required: true, ref: "User" },
  dialogId: { type: ObjectId, required: true, ref: "Dialog" }
});

module.exports = mongoose.model("Message", messageSchema);
