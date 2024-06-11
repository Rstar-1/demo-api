const projectService = require("../../services/projectservice/ProjectService");

exports.projectregister = async function (req, res) {
  try {
    var users = await projectService.projectregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getprojectdata = async function (req, res) {
  try {
    var users = await projectService.getprojectdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getprojectalldata = async function (req, res) {
  try {
    var users = await projectService.getprojectalldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getprojectsingledata = async function (req, res) {
  try {
    var users = await projectService.getprojectsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateprojectdata = async function (req, res) {
  try {
    var users = await projectService.updateprojectdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteprojectdata = async function (req, res) {
  try {
    var users = await projectService.deleteprojectdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};