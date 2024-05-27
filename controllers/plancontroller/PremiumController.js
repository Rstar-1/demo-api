const express = require("express");
const premiumService = require("../../services/planservice/EnquiryPremiumService");

exports.premiumregister = async function (req, res) {
  try {
    var users = await premiumService.premiumregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getpremiumdata = async function (req, res) {
  try {
    var users = await premiumService.getpremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getpremiumsingledata = async function (req, res) {
  try {
    var users = await premiumService.getpremiumsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatepremiumdata = async function (req, res) {
  try {
    var users = await premiumService.updatepremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletepremiumdata = async function (req, res) {
  try {
    var users = await premiumService.deletepremiumdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
