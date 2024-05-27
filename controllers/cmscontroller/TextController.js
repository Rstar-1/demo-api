const express = require("express");
const textService = require("../../services/cmsservice/TextService");

exports.textregister = async function (req, res) {
  try {
    var users = await textService.textregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.gettextdata = async function (req, res) {
  try {
    var users = await textService.gettextdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gettextalldata = async function (req, res) {
  try {
    var users = await textService.gettextalldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gettextsingledata = async function (req, res) {
  try {
    var users = await textService.gettextsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatetextdata = async function (req, res) {
  try {
    var users = await textService.updatetextdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletetextdata = async function (req, res) {
  try {
    var users = await textService.deletetextdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
