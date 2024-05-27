const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/planstworegister", Controller.PlansControllertwo.planstworegister);
  app.post("/getplantwodata", Controller.PlansControllertwo.getplantwodata);
  app.get("/getplanalltwodata", Controller.PlansControllertwo.getplanalltwodata);
  app.get(
    "/getplantwosingledata/:id",
    Controller.PlansControllertwo.getplantwosingledata
  );
  app.patch(
    "/updateplantwodata/:id",
    Controller.PlansControllertwo.updateplantwodata
  );
  app.delete(
    "/deleteplantwodata/:id",
    Controller.PlansControllertwo.deleteplantwodata
  );
};
