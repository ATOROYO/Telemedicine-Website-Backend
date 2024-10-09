const db = require("../config/db");
const bcrypt = require("bcrypt");

// User registration logic/ function
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try{
// Check if user exist in db
const [row] =await db.execute("SELECT * FROM users WHERE email = ?" [email])
  }
}
