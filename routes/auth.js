// Importing the packages
const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("./controllers/authController");
const router = express.Router();

//configure route

// user registration
router.post("./register", registerUser);
