const express = require("express");
const superpremiumenquiry = require("../../services/planservice/EnquirySuperPremiumService");

exports.superpremiumregister = async function (req, res) {
  try {
    var users = await superpremiumenquiry.superpremiumregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsuperpremiumdata = async function (req, res) {
  try {
    var users = await superpremiumenquiry.getsuperpremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsuperpremiumsingledata = async function (req, res) {
  try {
    var users = await superpremiumenquiry.getsuperpremiumsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatesuperpremiumdata = async function (req, res) {
  try {
    var users = await superpremiumenquiry.updatesuperpremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletesuperpremiumdata = async function (req, res) {
  try {
    var users = await superpremiumenquiry.deletesuperpremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
