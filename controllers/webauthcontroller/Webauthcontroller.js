const webauthService = require("../../services/webauthservice/WebauthService");

exports.signin = async function (req, res) {
  try {
    var users = await seoService.signin(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.signup = async function (req, res) {
  try {
    var users = await seoService.signup(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.googleSignIn = async function (req, res) {
  try {
    var users = await seoService.googleSignIn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
