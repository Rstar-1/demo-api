const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/signin", Controller.webauthController.signin);
  app.post("/signup", Controller.webauthController.signup);
  app.post("/googleSignIn", Controller.webauthController.googleSignIn);
};
