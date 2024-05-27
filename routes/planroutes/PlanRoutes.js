const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post(
    "/plansregister",
    Controller.PlansController.plansregister
  );
  app.post("/getplandata", Controller.PlansController.getplandata);
  app.get("/getplanalldata", Controller.PlansController.getplanalldata);
  app.get(
    "/getplansingledata/:id",
    Controller.PlansController.getplansingledata
  );
  app.patch(
    "/updateplandata/:id",
    Controller.PlansController.updateplandata
  );
  app.delete(
    "/deleteplandata/:id",
    Controller.PlansController.deleteplandata
  );
};
