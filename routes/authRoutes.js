var express = require("express");
var router = express.Router();

const authController = require("../api/controllers/authController");
const { validateLoginData } = require("../middlewares/loginMiddlewares");

router.post("/login", validateLoginData, authController.login);

module.exports = router;
