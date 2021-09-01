const Coin = require("../models/Coin");
const User = require("../models/User");
const geckoServices = require("../../services/coinGeckoServices");
const userServices = require("../../services/user");
const orderByPrice = require("../../utils/orderCoinsByPrice");
const formatCoinData = require("../../utils/formatCoinData");
const respondSuccess = require("../../utils/respondSuccess");

module.exports = {
  async register(req, res, next) {
    try {
      let newUser = await userServices.createUser(req.body);

      res.status(201);
      let responseData = {};
      responseData.data = newUser;
      return respondSuccess(res, responseData);
    } catch (error) {
      next(error);
    }
  },

  async getTop(req, res, next) {
    try {
      let limit = req.query.limit;
      let userCoins = await userServices.getUserCoins(req.user);

      let arrayCoins = [];
      for (const userCoin of userCoins) {
        let coin = await geckoServices.getCoinById(
          req.user.preferred_money,
          userCoin.coin_external_id
        );
        arrayCoins.push(coin.data);
      }

      let topCoins = formatCoinData(arrayCoins.slice(0, limit));
      let order = req.query.order || "desc";
      topCoins = orderByPrice(topCoins, order);

      let responseData = {};
      responseData.data = topCoins;

      return respondSuccess(res, responseData);
    } catch (error) {
      next(error);
    }
  },
};
