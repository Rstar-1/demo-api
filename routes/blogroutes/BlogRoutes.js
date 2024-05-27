const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const {fileUpload} = require("../../middleware/FileUpload");
const {uploadToCloud} = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/blogregister",
     fileUpload("image", false),
    //  fileUpload([
    //    { name: "image1", maxCount: 1 },
    //    { name: "image2", maxCount: 1 },
    // ]
    uploadToCloud(),
    Controller.BlogController.blogregister
  );
  app.post("/getblogdata", Controller.BlogController.getblogdata);
  app.get("/getallblogdata", Controller.BlogController.getallblogdata);
  app.get("/getsingleblogdata/:id", Controller.BlogController.getsingleblogdata);
  app.patch(
    "/updateblogdata/:id",
    fileUpload("image", false),
    //  fileUpload([
    //    { name: "image1", maxCount: 1 },
    //    { name: "image2", maxCount: 1 },
    // ]
    uploadToCloud(),
    Controller.BlogController.updateblogdata
  );
  app.delete("/deleteblogdata/:id", Controller.BlogController.deleteblogdata);
};
