const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  picture: {
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
const image = new mongoose.model("image", ImageSchema);

module.exports = image;
