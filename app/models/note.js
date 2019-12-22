const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Note", noteSchema);