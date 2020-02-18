mongoose = require("mongoose");
const { ObjectId, Date } = mongoose.Schema.Types;
const { Schema } = mongoose;

const dialogSchema = new Schema({
  userFrom: { type: ObjectId, required: true, ref: "User" },
  userTo: { type: ObjectId, required: true, ref: "User" },
  // lastUpdated: { type: Date, default: Date.default }
});

module.exports = mongoose.model("Dialog", dialogSchema);
