const express = require("express");
const reviewService = require("../../services/reviewservice/ReviewService");

exports.reviewsregister = async function (req, res) {
  try {
    var users = await reviewService.reviewsregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getreviewdata = async function (req, res) {
  try {
    var users = await reviewService.getreviewdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getreviewalldata = async function (req, res) {
  try {
    var users = await reviewService.getreviewalldata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getreviewsingledata = async function (req, res) {
  try {
    var users = await reviewService.getreviewsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatereviewdata = async function (req, res) {
  try {
    var users = await reviewService.updatereviewdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletereviewdata = async function (req, res) {
  try {
    var users = await reviewService.deletereviewdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
