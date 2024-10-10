const db = require("../config/db");
const bcrypt = require("bcrypt");

// User registration logic/ function
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try{
  // Check if user exist in db
  const [row] =await db.execute("SELECT * FROM users WHERE email = ?" ,[email])
  if(row.lenth > 0){
      return res.status(400).json({message:"User already exist"})
  }

//   Hash the password
const hashedPassword = await bcrypt.hash(password,10)

// Insert the record to db
await db.execute("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email ,hashedPassword])
res.status(201).json({message:"Usser registered successfully."})
    }
}