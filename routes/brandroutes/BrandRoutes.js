const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/brandregister",
    fileUpload("image", false),
    uploadToCloud(),
    Controller.BrandController.brandregister
  );
  app.post("/getbranddata", Controller.BrandController.getbranddata);
  app.get("/getbrandalldata", Controller.BrandController.getbrandalldata);
  app.get(
    "/getbrandsingledata/:id",
    Controller.BrandController.getbrandsingledata
  );
  app.patch(
    "/updatebranddata/:id",
    fileUpload("image", false),
    uploadToCloud(),
    Controller.BrandController.updatebranddata
  );
  app.delete(
    "/deletebranddata/:id",
    Controller.BrandController.deletebranddata
  );
};
