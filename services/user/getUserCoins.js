const Coin = require("../../api/models/Coin");

async function getUserCoins(user) {
  let coins = await Coin.findAll({
    where: {
      user_id: user.id,
    },
  });

  return coins;
}

module.exports = getUserCoins;
