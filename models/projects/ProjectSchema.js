const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  name: {
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
const projects = new mongoose.model("project", projectSchema);

module.exports = projects;
