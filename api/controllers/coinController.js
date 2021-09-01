const Coin = require("../models/Coin");
const geckoServices = require("../../services/coinGeckoServices");
const coinService = require("../../services/coinGeckoServices");
const userService = require("../../services/user");
const respondSuccess = require("../../utils/respondSuccess");
const formatCoinData = require("../../utils/formatCoinData");

module.exports = {
  async create(req, res, next) {
    try {
      if (await userService.userHasCoin(req.user, req.body.coin_external_id)) {
        let responseData = {};
        responseData.message = "You currently already have this coin";

        return respondSuccess(res, responseData);
      }

      // verify if coin exist
      let coin = await geckoServices.getCoinById(
        req.user.preferred_money,
        req.body.coin_external_id
      );

      coin = await Coin.create({
        coin_external_id: req.body.coin_external_id,
        user_id: req.user.id,
      });

      res.status(201);
      let responseData = {};
      responseData.data = coin;

      return respondSuccess(res, responseData);

    } catch (err) {
      next(err);
    }
  },

  async all(req, res, next) {
    try {
      let coins = await coinService.getAllCoins(req.user.preferred_money);
      coins = await formatCoinData(coins.data);

      let responseData = {};
      responseData.data = coins;

      return respondSuccess(res, responseData);
      
    } catch (err) {
      next(err);
    }
  },
};
