const User = require("../../api/models/User");
const bcrypt = require("bcrypt");
const authConfig = require("../../config/auth");

async function createUser(requestBody) {
  try {
    let password = bcrypt.hashSync(
      requestBody.password,
      Number.parseInt(authConfig.rounds)
    );

    let user = await User.create({
      name: requestBody.name,
      lastname: requestBody.lastname,
      username: requestBody.username,
      password: password,
      preferred_money: requestBody.preferred_money,
    });

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = createUser;
