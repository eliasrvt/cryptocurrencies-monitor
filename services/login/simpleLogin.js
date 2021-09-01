const User = require("../../api/models/User");
const bcrypt = require("bcrypt");

async function simpleLogin(userCredentials) {
  // get user data by username
  let user = await User.findOne({
    where: {
      username: userCredentials.username,
    },
  });

  // validate username exist
  if (!user) {
    throw Error("username not found");
  }

  // compare passwords
  let isPasswordValid = bcrypt.compareSync(
    userCredentials.password,
    user.password
  );

  if (!isPasswordValid) {
    throw Error("invalid password");
  }

  return user;
}

module.exports = simpleLogin;
