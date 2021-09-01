const config = require("./config");

module.exports = {
  secret: config.AUTH_SECRET || "CryptoCurrencies",
  expires: config.AUTH_EXPIRES || "1h",
  rounds: config.AUTH_ROUNDS || 10,
};
