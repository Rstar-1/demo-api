const express = require("express");
const imageService = require("../../services/cmsservice/ImageService");

exports.imageregister = async function (req, res) {
  try {
    var users = await imageService.imageregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getimagedata = async function (req, res) {
  try {
    var users = await imageService.getimagedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getimagealldata = async function (req, res) {
  try {
    var users = await imageService.getimagealldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getimagesingledata = async function (req, res) {
  try {
    var users = await imageService.getimagesingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateimagedata = async function (req, res) {
  try {
    var users = await imageService.updateimagedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteimagedata = async function (req, res) {
  try {
    var users = await imageService.deleteimagedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
