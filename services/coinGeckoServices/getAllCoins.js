const axios = require("axios");

async function getAllCoins(user_preferred_money) {
  try {
    let url = process.env.API_BASE_URL + "/coins/markets?";
    let coins = await axios.get(url, {
      params: {
        vs_currency: user_preferred_money,
      },
    });
    return coins;
  } catch (error) {
    throw error;
  }
}

module.exports = getAllCoins;
