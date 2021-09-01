const Coin = require("../../api/models/Coin");

async function userHasCoin(user, coin_id) {
  let userCoin = await Coin.findOne({
    where: {
      user_id: user.id,
      coin_external_id: coin_id,
    },
  });

  if (userCoin) return true;
  
  return false;
}

module.exports = userHasCoin;
