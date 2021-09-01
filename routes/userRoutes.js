var express = require("express");
var router = express.Router();

const auth = require("../middlewares/auth");
const UserController = require("../api/controllers/userController");
const { validateGetTopData } = require("../middlewares/coinMiddleware");
const { validateRequestData } = require("../middlewares/userMiddlewares");


router.post("/register", validateRequestData, UserController.register);
router.get("/top", auth, validateGetTopData, UserController.getTop);

module.exports = router;
