const _ = require("lodash");

function orderCoinsByPrice(arrayCoins, order) {
  return _.orderBy(arrayCoins, ["current_price"], [order]);
}

module.exports = orderCoinsByPrice;
