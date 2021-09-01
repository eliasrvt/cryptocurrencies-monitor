const loginServices = require("../../services/login");
const tokenServices = require("../../services/token");
const respondSuccess = require("../../utils/respondSuccess");

const responseData = {};

module.exports = {
  async login(req, res, next) {
    try {
      let loginResponse = await loginServices.simpleLogin(req.body);
      let token = await tokenServices.generateToken(loginResponse);

      let userData = {};
      userData.name = loginResponse.name;
      userData.lastname = loginResponse.lastname;
      userData.username = loginResponse.username;
      userData.preferred_money = loginResponse.preferred_money;

      responseData.data = {};
      responseData.data.token = token;
      responseData.data.user = userData;
      responseData.message = "Login success";

      return respondSuccess(res, responseData);

    } catch (error) {
      next(error);
    }
  },
};
