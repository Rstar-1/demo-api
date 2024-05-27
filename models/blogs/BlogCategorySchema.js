const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default:true,
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
const blogcategory = new mongoose.model("blogcategory", blogCategorySchema);

module.exports = blogcategory;
