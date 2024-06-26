const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
  // updatedAt: {
  //   type: Date,
  //   default: new Date(),
  // },
}, {
  timestamps: true, // This will add `createdAt` and `updatedAt` fields
});

// model
const projects = new mongoose.model("project", projectSchema);

module.exports = projects;