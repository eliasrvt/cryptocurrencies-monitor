"use strict";

const faker = require("faker");
const bcrypt = require("bcrypt");
const authConfig = require("../../config/auth");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];
    let defaultPassword = bcrypt.hashSync(
      "password",
      Number.parseInt(authConfig.rounds)
    );

    let admin = {
      name: "Administrator",
      lastname: "AdminLastname",
      username: "admin",
      password: defaultPassword,
      preferred_money: "USD",
      created_at: faker.datatype.datetime(),
      updated_at: faker.datatype.datetime(),
    };
    users.push(admin);

    for (var i = 0; i < 7; i++) {
      let user = {};
      user.name = faker.name.findName();
      user.lastname = faker.name.findName();
      user.username = faker.internet.userName();
      user.password = defaultPassword;
      user.preferred_money = "USD";
      user.created_at = faker.datatype.datetime();
      user.updated_at = faker.datatype.datetime();

      users.push(user);
    }

    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
