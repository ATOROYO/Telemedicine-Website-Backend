const express = require("express");
const session = require("express-session");
const MySQLStore = require("connect-mysl2")(session);

const db = require("./config/db");
const authRoutes = require("./route/auth");

const app = express();
