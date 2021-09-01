const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const respondSuccess = require("../utils/respondSuccess");

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403);
    let responseData = {};
    responseData.message = "Unauthorized access";

    return respondSuccess(res, responseData);
  }

  let token = req.headers.authorization.split(" ")[1];

  try {
    let decoded = jwt.verify(token, authConfig.secret);
    req.user = decoded.user;
    next();
  } catch (error) {
    next(error);
  }
};
