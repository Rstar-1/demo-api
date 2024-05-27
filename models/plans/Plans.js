const mongoose = require("mongoose");

const plansSchema = new mongoose.Schema({
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
const plans = new mongoose.model("plans", plansSchema);

module.exports = plans;
