"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database/connection");

class Coin extends Model {}
Coin.init(
  {
    user_id: DataTypes.INTEGER,
    coin_external_id: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Coin",
  }
);

module.exports = Coin;
