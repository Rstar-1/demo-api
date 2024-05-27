const express = require("express");
const planServicetwo = require("../../services/planservice/Planservice2");

exports.planstworegister = async function (req, res) {
  try {
    var users = await planServicetwo.planstworegister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getplantwodata = async function (req, res) {
  try {
    var users = await planServicetwo.getplantwodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplanalltwodata = async function (req, res) {
  try {
    var users = await planServicetwo.getplanalltwodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getplantwosingledata = async function (req, res) {
  try {
    var users = await planServicetwo.getplantwosingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateplantwodata = async function (req, res) {
  try {
    var users = await planServicetwo.updateplantwodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteplantwodata = async function (req, res) {
  try {
    var users = await planServicetwo.deleteplantwodata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
