const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema({
  metatitle: {
    type: String,
    required: true,
  },
  metaauthor: {
    type: String,
    required: true,
  },
  metaconcial: {
    type: String,
    required: true,
  },
  metadescription: {
    type: String,
    required: true,
  },
  metakeyword: {
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

// model seo
const seo = new mongoose.model("seo", seoSchema);
module.exports = seo;
