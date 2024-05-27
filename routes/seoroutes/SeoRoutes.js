const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/seoregister", Controller.SeoController.seoregister);
  app.get("/getseodata", Controller.SeoController.getseodata);
  app.get(
    "/getseosingledata/:id",
    Controller.SeoController.getseosingledata
  );
  app.patch("/updateseodata/:id", Controller.SeoController.updateseodata);
  app.delete("/deleteseodata/:id", Controller.SeoController.deleteseodata);
};
