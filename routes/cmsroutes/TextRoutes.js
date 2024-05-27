const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/textregister", Controller.TextController.textregister);
  app.post("/gettextdata", Controller.TextController.gettextdata);
  app.get("/gettextalldata", Controller.TextController.gettextalldata);
  app.get(
    "/gettextsingledata/:id",
    Controller.TextController.gettextsingledata
  );
  app.patch("/updatetextdata/:id", Controller.TextController.updatetextdata);
  app.delete("/deletetextdata/:id", Controller.TextController.deletetextdata);
};
