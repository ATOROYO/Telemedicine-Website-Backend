const db = require("../config/db");
const bcrypt = require("bcrypt");

// User registration logic/ function
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
};
