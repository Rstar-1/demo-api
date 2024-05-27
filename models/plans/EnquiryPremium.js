const mongoose = require("mongoose");

const premiumenquirySchema = new mongoose.Schema({
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
const premiumenquiry = new mongoose.model("premiumenquiry", premiumenquirySchema);
module.exports = premiumenquiry;
