const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/superpremiumregister", Controller.SuperPremiumController.superpremiumregister);
  app.post("/getsuperpremiumdata", Controller.SuperPremiumController.getsuperpremiumdata);
  app.get(
    "/getsuperpremiumsingledata/:id",
    Controller.SuperPremiumController.getsuperpremiumsingledata
  );
  app.patch("/updatesuperpremiumdata/:id", Controller.SuperPremiumController.updatesuperpremiumdata);
  app.delete(
    "/deletesuperpremiumdata/:id",
    Controller.SuperPremiumController.deletesuperpremiumdata
  );
};
