const config = require("./config");

module.exports = {
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  host: config.HOST,
  dialect: config.DB_DIALECT,
  define: {
    underscored: true,
    timestamp: false,
  },
};
