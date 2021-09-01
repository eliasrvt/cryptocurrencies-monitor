// config.js
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(".env." + process.env.NODE_ENV),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME || "database_name",
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
};
