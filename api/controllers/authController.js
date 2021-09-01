const loginServices = require("../../services/login");
const tokenServices = require("../../services/token");

module.exports = {
  async login(req, res, next) {
    try {
      // validate user credentials
      let loginResponse = await loginServices.simpleLogin(req.body);

      // generate token
      let token = await tokenServices.generateToken(loginResponse);

      let userData = {};
      userData.name = loginResponse.name;
      userData.lastname = loginResponse.lastname;
      userData.username = loginResponse.username;
      userData.preferred_money = loginResponse.preferred_money;

      return res.json({ user: userData, token: token });
    } catch (error) {
      next(error);
    }
  },
};
