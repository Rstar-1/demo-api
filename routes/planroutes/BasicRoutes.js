const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/basicregister", Controller.BasicController.basicregister);
  app.post("/getbasicdata", Controller.BasicController.getbasicdata);
  app.get("/getbasicsingledata/:id", Controller.BasicController.getbasicsingledata);
  app.patch("/updatebasicdata/:id", Controller.BasicController.updatebasicdata);
  app.delete("/deletebasicdata/:id", Controller.BasicController.deletebasicdata);
};
