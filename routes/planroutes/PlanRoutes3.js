const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post(
    "/plansthirdregister",
    Controller.PlansControllerthird.plansthirdregister
  );
  app.post("/getplanthirddata", Controller.PlansControllerthird.getplanthirddata);
  app.get("/getplanallthirddata", Controller.PlansControllerthird.getplanallthirddata);
  app.get(
    "/getplanthirdsingledata/:id",
    Controller.PlansControllerthird.getplanthirdsingledata
  );
  app.patch(
    "/updateplanthirddata/:id",
    Controller.PlansControllerthird.updateplanthirddata
  );
  app.delete(
    "/deleteplanthirddata/:id",
    Controller.PlansControllerthird.deleteplanthirddata
  );
};
