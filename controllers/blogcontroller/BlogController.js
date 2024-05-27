const express = require("express");
const Blogservice = require("../../services/blogservice/BlogService");

exports.blogregister = async function (req, res) {
  try {
    var users = await Blogservice.blogregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getblogdata = async function (req, res) {
  try {
    var users = await Blogservice.getblogdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getallblogdata = async function (req, res) {
  try {
    var users = await Blogservice.getallblogdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsingleblogdata = async function (req, res) {
  try {
    var users = await Blogservice.getsingleblogdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updateblogdata = async function (req, res) {
  try {
    var users = await Blogservice.updateblogdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deleteblogdata = async function (req, res) {
  try {
    var users = await Blogservice.deleteblogdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

