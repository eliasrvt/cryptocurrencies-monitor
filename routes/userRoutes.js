var express = require("express");
var router = express.Router();

/*
	Middlewares
*/
const { validateRequestData } = require("../middlewares/userMiddlewares");
const { validateGetTopData } = require("../middlewares/coinMiddleware");
const auth = require("../middlewares/auth");
/*
	Controller
*/
const UserController = require("../api/controllers/userController");

/* 
	Routes 
*/
router.post("/register", validateRequestData, UserController.register);
router.get("/top", auth, validateGetTopData, UserController.getTop);

module.exports = router;
