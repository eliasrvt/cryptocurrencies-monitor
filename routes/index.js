var express = require("express");
var router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const coinsRoutes = require("./coinRoutes");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to Cryptocurrencies Api");
});

router.use("/users", userRoutes);
router.use("/coins", coinsRoutes);
router.use("/auth", authRoutes);

module.exports = router;
