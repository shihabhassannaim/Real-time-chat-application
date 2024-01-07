const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../Controller/UserController");

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
