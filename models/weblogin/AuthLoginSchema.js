const mongoose = require("mongoose");

const webauthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
    required: false,
  },
  Id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// model
const webauth = new mongoose.model("task", webauthSchema);
module.exports = webauth;
