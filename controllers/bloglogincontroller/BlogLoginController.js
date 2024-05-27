const express = require("express");
const BlogLoginService = require("../../services/blogloginservice/BlogLoginService");

exports.register = async function (req, res) {
  try {
    var users = await BlogLoginService.register(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getloginuser = async function (req, res) {
  try {
    var users = await BlogLoginService.getloginuser(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.login = async function (req, res) {
  try {
    var users = await BlogLoginService.login(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.validuser = async function (req, res) {
  try {
    var users = await BlogLoginService.validuser(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.logout = async function (req, res) {
  try {
    var users = await BlogLoginService.logout(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
