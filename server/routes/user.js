const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

const controllers = new UserController();

router.get("/:id", controllers.getUser);

module.exports = router;
