const express = require("express");
const planServicethird = require("../../services/planservice/Planservice3");

exports.plansthirdregister = async function (req, res) {
  try {
    var users = await planServicethird.plansthirdregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getplanthirddata = async function (req, res) {
  try {
    var users = await planServicethird.getplanthirddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplanallthirddata = async function (req, res) {
  try {
    var users = await planServicethird.getplanallthirddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplanthirdsingledata = async function (req, res) {
  try {
    var users = await planServicethird.getplanthirdsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateplanthirddata = async function (req, res) {
  try {
    var users = await planServicethird.updateplanthirddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteplanthirddata = async function (req, res) {
  try {
    var users = await planServicethird.deleteplanthirddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
