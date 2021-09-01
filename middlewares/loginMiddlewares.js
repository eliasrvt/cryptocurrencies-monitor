const { loginData } = require("../validations/login/loginValidationData");
const respondSuccess = require("../utils/respondSuccess");

const responseData = {};

module.exports = {
  validateLoginData: async (req, res, next) => {
    const value = await loginData.validate(req.body);

    if (value.error) {
      responseData.message = value.error.details[0].message;
      return respondSuccess(res, responseData);
    } else {
      next();
    }
  },
};
