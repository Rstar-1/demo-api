const brandService = require("../../services/brandservice/BrandService");

exports.brandregister = async function (req, res) {
  try {
    var users = await brandService.brandregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getbranddata = async function (req, res) {
  try {
    var users = await brandService.getbranddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getbrandalldata = async function (req, res) {
  try {
    var users = await brandService.getbrandalldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getbrandsingledata = async function (req, res) {
  try {
    var users = await brandService.getbrandsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatebranddata = async function (req, res) {
  try {
    var users = await brandService.updatebranddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletebranddata = async function (req, res) {
  try {
    var users = await brandService.deletebranddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
