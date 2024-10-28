const express = require("express");
const router = express.Router();

const UsersControllers = require("../controllers/UsersControllers");

const controllers = new UsersControllers();

router.get("/", controllers.getUsers);

module.exports = router;
