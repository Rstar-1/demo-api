const multer = require("multer");
const fs = require("fs");
const joinpath = require("path");
const mkdirp = require("mkdirp");
const PORT = process.env.PORT;

var communityName = 'raj';
var folder = "raj";
exports.uploadToCloud = (
  path = null,
  file_Name = null,
  originalname = true,
  url = false
) => {
  return async (req, res, next) => {
    try {
      let filePath;
      const { file, files, body } = req;
      if (file) {
        console.log(file);
        let fileName;
        if (file_Name)
          fileName = `${file_Name}-${~~(Date.now() / 1000)}`;
        else
          fileName = originalname
            ? file.originalname
            : `${file.originalname}-${~~(Date.now() / 1000)}`;

        let file_Path;
        if (path) file_Path = `${path}`;
        else file_Path = `${body.path}`;
        const destinationFolder = "uploads";
        const uniqueFileName = Date.now() + file.originalname.trim();
        const filePaths = `${destinationFolder}/${uniqueFileName}`;
        console.log(filePaths, "filePathfilePath");
        fs.writeFileSync(filePaths, file.buffer);
        req.body.picture =
          "http://localhost:" + `${PORT}` + "/uploads/" + uniqueFileName;
      }

      if (files) {
        let FileData = Array.isArray(files) ? files : Object.keys(files);
        console.log("files in cloud", files);

        if (Array.isArray(files)) {
          let arrayimagesPaths = [];

          for (let [i, singleFile] of FileData.entries()) {
            arrayimagesPaths.push(image);
          }
          req.body.picture = arrayimagesPaths;
        } else {
          for (let FileName of FileData) {
            let arrayimagesPaths = [];
            for (let singleFile of files[FileName]) {
              let filePath = `${communityName}/${folder}/${FileName}-${~~(
                Date.now() / 1000
              )}`;
              const destinationFolder = "uploads";
              const uniqueFileName =
                Date.now() / 1000 +
                "-" +
                "-" +
                singleFile.originalname;
              const filePaths = `${destinationFolder}/${uniqueFileName}`;
              fs.writeFileSync(filePaths, singleFile.buffer);
              arrayimagesPaths.push(
                "http://localhost:" + `${PORT}` + "/uploads/" + uniqueFileName
              );
            }
            if (arrayimagesPaths.length <= 1) {
              req.body[FileName] = arrayimagesPaths[0];
            } else {
              req.body[FileName] = arrayimagesPaths;
            }
          }
        }
      }
      next();
    } catch (error) {
      return next(error);
    }
  };
};
