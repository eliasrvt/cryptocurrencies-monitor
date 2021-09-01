var express = require("express");
var router = express.Router();

const CoinController = require("../api/controllers/coinController");
const auth = require("../middlewares/auth");
const { validateRequestData } = require("../middlewares/coinMiddleware");

router.get("/", auth, CoinController.all);
router.post("/", auth, validateRequestData, CoinController.create);

module.exports = router;
