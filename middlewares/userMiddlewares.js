const respondSuccess = require("../utils/respondSuccess");
const { user } = require("../validations/user/createUserValidationData");

const responseData = {};

module.exports = {
  validateRequestData: async (req, res, next) => {
    const value = await user.validate(req.body);
    if (value.error) {
      responseData.message = value.error.details[0].message;
      return respondSuccess(res, responseData);
    } else {
      next();
    }
  },
};
