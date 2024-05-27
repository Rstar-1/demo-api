const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/imageregister",
    fileUpload("image", false),
    //fileUpload([{ name: "imagecms", maxCount: 1 }]),
    uploadToCloud(),
    Controller.ImageController.imageregister
  );
  app.post("/getimagedata", Controller.ImageController.getimagedata);
  app.get("/getimagealldata", Controller.ImageController.getimagealldata);
  app.get(
    "/getimagesingledata/:id",
    Controller.ImageController.getimagesingledata
  );
  app.patch(
    "/updateimagedata/:id",
    fileUpload("image", false),
    uploadToCloud(),
    Controller.ImageController.updateimagedata
  );
  app.delete(
    "/deleteimagedata/:id",
    Controller.ImageController.deleteimagedata
  );
};
