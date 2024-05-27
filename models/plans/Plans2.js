const mongoose = require("mongoose");

const planstwoSchema = new mongoose.Schema({
  plan: {
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
const planstwo = new mongoose.model("planstwo", planstwoSchema);

module.exports = planstwo;
