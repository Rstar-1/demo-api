const mongoose = require("mongoose");

const superpremiumenquirySchema = new mongoose.Schema({
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
const superpremiumenquiry = new mongoose.model(
  "superpremiumenquiry",
  superpremiumenquirySchema
);
module.exports = superpremiumenquiry;
