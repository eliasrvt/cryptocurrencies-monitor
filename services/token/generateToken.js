const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");

async function generateToken(userData) {
  let token = jwt.sign({ user: userData }, authConfig.secret, {
    expiresIn: authConfig.expires,
  });

  return token;
}

module.exports = generateToken;
