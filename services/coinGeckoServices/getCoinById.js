const axios = require("axios");

async function getCoinById(user_preferred_money, coin_id) {
  try {
    let url = process.env.API_BASE_URL + "/coins/" + coin_id + "?";
    let coin = await axios.get(url, {
      params: {
        vs_currency: user_preferred_money,
      },
    });
    return coin;
  } catch (error) {
    throw error;
  }
}

module.exports = getCoinById;
