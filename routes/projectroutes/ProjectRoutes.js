const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/projectregister",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.projectController.projectregister
  );
  app.post("/getprojectdata", Controller.projectController.getprojectdata);
  app.get("/getprojectalldata", Controller.projectController.getprojectalldata);
  app.get(
    "/getprojectsingledata/:id",
    Controller.projectController.getprojectsingledata
  );
  app.patch(
    "/updateprojectdata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.projectController.updateprojectdata
  );
  app.patch(
    "/updateprojectstatus/:id",
    Controller.projectController.updateprojectstatus
  );
  app.delete(
    "/deleteprojectdata/:id",
    Controller.projectController.deleteprojectdata
  );
};