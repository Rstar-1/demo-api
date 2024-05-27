const mongoose = require("mongoose");

const basicenquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
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
const basicenquiry = new mongoose.model("basicenquiry", basicenquirySchema);
module.exports = basicenquiry;
