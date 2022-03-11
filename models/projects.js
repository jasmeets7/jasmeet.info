const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Technologies: { type: String, required: true },
  url: { type: String, required: false },
  github: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model("projects", projectSchema);