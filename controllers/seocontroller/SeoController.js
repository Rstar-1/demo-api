const seoService = require("../../services/seoservice/SeoService");

exports.seoregister = async function (req, res) {
  try {
    var users = await seoService.seoregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getseodata = async function (req, res) {
  try {
    var users = await seoService.getseodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getseosingledata = async function (req, res) {
  try {
    var users = await seoService.getseosingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateseodata = async function (req, res) {
  try {
    var users = await seoService.updateseodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteseodata = async function (req, res) {
  try {
    var users = await seoService.deleteseodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
