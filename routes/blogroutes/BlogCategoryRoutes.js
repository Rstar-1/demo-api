const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post(
    "/blogcategoryadd",
    Controller.BlogCategoryController.blogcategoryregister
  );
  app.get("/blogcategoryalldata", Controller.BlogCategoryController.getcategorydata);
  app.get(
    "/blogcategorysingledata/:id",
    Controller.BlogCategoryController.getcategorysingledata
  );
  app.patch(
    "/blogacategoryupdate/:id",
    Controller.BlogCategoryController.updatecategorydata
  );
  app.delete(
    "/blogcategorydelete/:id",
    Controller.BlogCategoryController.deletecategorydata
  );
};
