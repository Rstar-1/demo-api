const express = require("express");
const BlogCategoryService = require("../../services/blogservice/BlogCategoryService");

exports.blogcategoryregister = async function (req, res) {
  try {
    var users = await BlogCategoryService.blogcategoryregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getcategorydata = async function (req, res) {
  try {
    var users = await BlogCategoryService.getcategorydata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getcategorysingledata = async function (req, res) {
  try {
    var users = await BlogCategoryService.getcategorysingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatecategorydata = async function (req, res) {
  try {
    var users = await BlogCategoryService.updatecategorydata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletecategorydata = async function (req, res) {
  try {
    var users = await BlogCategoryService.deletecategorydata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
