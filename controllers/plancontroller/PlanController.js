const express = require("express");
const planService = require("../../services/planservice/Planservice");

exports.plansregister = async function (req, res) {
  try {
    var users = await planService.plansregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getplandata = async function (req, res) {
  try {
    var users = await planService.getplandata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplanalldata = async function (req, res) {
  try {
    var users = await planService.getplanalldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplansingledata = async function (req, res) {
  try {
    var users = await planService.getplansingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateplandata = async function (req, res) {
  try {
    var users = await planService.updateplandata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteplandata = async function (req, res) {
  try {
    var users = await planService.deleteplandata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
