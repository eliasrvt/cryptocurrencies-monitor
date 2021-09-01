const bcrypt = require("bcrypt");
const User = require("../../api/models/User");
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

    let userData = {};
    userData.name = user.name;
    userData.lastname = user.lastname;
    userData.username = user.username;
    userData.preferred_money = user.preferred_money;

    return userData;
    
  } catch (error) {
    throw error;
  }
}

module.exports = createUser;
