const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/reviewsregister", Controller.ReviewController.reviewsregister);
  app.post("/getreviewdata", Controller.ReviewController.getreviewdata);
  app.get("/getreviewalldata", Controller.ReviewController.getreviewalldata);
  app.get(
    "/getreviewsingledata/:id",
    Controller.ReviewController.getreviewsingledata
  );
  app.patch("/updatereviewdata/:id", Controller.ReviewController.updatereviewdata);
  app.delete(
    "/deletereviewdata/:id",
    Controller.ReviewController.deletereviewdata
  );
};
