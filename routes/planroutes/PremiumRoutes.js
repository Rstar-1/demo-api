const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/premiumregister", Controller.PremiumController.premiumregister);
  app.post("/getpremiumdata", Controller.PremiumController.getpremiumdata);
  app.get(
    "/getpremiumsingledata/:id",
    Controller.PremiumController.getpremiumsingledata
  );
  app.patch("/updatepremiumdata/:id", Controller.PremiumController.updatepremiumdata);
  app.delete(
    "/deletepremiumdata/:id",
    Controller.PremiumController.deletepremiumdata
  );
};
