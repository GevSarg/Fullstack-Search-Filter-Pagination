const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const models = require("./model");

const UsersServices = require("./services/UsersServices");
const UserServices = require("./services/UserServices");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Failed to Connect");
  });

app.locals.models = {
  users: models.users,
};

app.locals.services = {
  users: new UsersServices(app.locals.models),
  user: new UserServices(app.locals.models),
};

app.use(cors({ origin: "http://localhost:5173" }));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
