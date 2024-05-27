const express = require("express");
const basicService = require("../../services/planservice/EnquiryBasicService");

exports.basicregister = async function (req, res) {
  try {
    var users = await basicService.basicregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getbasicdata = async function (req, res) {
  try {
    var users = await basicService.getbasicdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getbasicsingledata = async function (req, res) {
  try {
    var users = await basicService.getbasicsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatebasicdata = async function (req, res) {
  try {
    var users = await basicService.updatebasicdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletebasicdata = async function (req, res) {
  try {
    var users = await basicService.deletebasicdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
