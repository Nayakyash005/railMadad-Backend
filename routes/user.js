const express = require("express");

const Userrouter = express.Router();
const { registerControler } = require("../controller/user");

Userrouter.post("/register", registerControler);

module.exports = Userrouter;
