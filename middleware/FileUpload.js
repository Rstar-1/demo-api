const multer = require("multer");

exports.fileUpload = (key, multiple = false) => {
  if (typeof key == "object" && key.length > 1) {
    return multer().fields(key);
  } else if (multiple) {
    return multer().array(key);
  } else {
    return multer().single(key);
  }
};
