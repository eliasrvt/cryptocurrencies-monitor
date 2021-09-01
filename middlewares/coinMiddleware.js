const { coinData } = require("../validations/coin/createCoinValidationData");
const { topData } = require("../validations/coin/getTopCoinValidationData");
const respondSuccess = require("../utils/respondSuccess");

const responseData = {};

module.exports = {
  validateRequestData: async (req, res, next) => {
    const value = await coinData.validate(req.body);
    if (value.error) {
      responseData.message = value.error.details[0].message;
      return respondSuccess(res, responseData);
    } else {
      next();
    }
  },

  validateGetTopData: async (req, res, next) => {
    const value = await topData.validate(req.query);
    if (value.error) {
      responseData.message = value.error.details[0].message;
      return respondSuccess(res, responseData);
    } else {
      next();
    }
  },
};
