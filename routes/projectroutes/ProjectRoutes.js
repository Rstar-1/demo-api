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
    fileUpload("image", false),
    uploadToCloud(),
    Controller.ProjectController.projectregister
  );
  app.post("/getprojectdata", Controller.ProjectController.getprojectdata);
  app.get("/getprojectalldata", Controller.ProjectController.getprojectalldata);
  app.get(
    "/getprojectsingledata/:id",
    Controller.ProjectController.getprojectsingledata
  );
  app.patch(
    "/updateprojectdata/:id",
    fileUpload("image", false),
    uploadToCloud(),
    Controller.ProjectController.updateprojectdata
  );
  app.delete(
    "/deleteprojectdata/:id",
    Controller.ProjectController.deleteprojectdata
  );
};
