const mongoose = require("mongoose");

const mailSchema = mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  Message: { type: String, required: true }
});

module.exports = mongoose.model("mail", mailSchema);