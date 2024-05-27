const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

// model
const text = new mongoose.model("text", TextSchema);

module.exports = text;
