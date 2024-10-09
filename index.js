// Importing packages
const express = require("express");
const session = require("express-session");
const MySQLStore = require("connect-mysl2")(session);

const db = require("./config/db");
const authRoutes = require("./route/auth");

// Initialize server
const app = express();

// Set-up middleware
app.use(express.json());

// Set-up session
app.use(
  session({
    key: "user_id",
    secret: process.env.SESSION_SECRET,
  })
);
