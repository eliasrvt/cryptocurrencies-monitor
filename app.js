const express = require("express");
const cookieParser = require("cookie-parser");
//var logger = require("morgan"); // ???

const indexRouter = require("./routes/index");

const app = express();
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

//app.use(logger(config.get("logger"))); // ???
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
