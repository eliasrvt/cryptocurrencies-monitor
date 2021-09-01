const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

async function generateToken(userData) {
  let token = jwt.sign({ user: userData }, authConfig.secret, {
    expiresIn: authConfig.expires,
  });

  return token;
}

module.exports = generateToken;
