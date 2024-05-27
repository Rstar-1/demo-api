const mongoose = require("mongoose");

const plansthirdSchema = new mongoose.Schema({
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
const plansthird = new mongoose.model("plansthird", plansthirdSchema);

module.exports = plansthird;
