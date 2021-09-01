"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database/connection");
const Coin = require("./Coin");

class User extends Model {}
User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    preferred_money: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.hasMany(Coin, {
  as: "coins",
  foreignKey: "user_id",
});

module.exports = User;
