const express = require("express");
const complaintRouter = express.Router();
const { ComplaintControler } = require("../controller/authController");

complaintRouter.post("/done", ComplaintControler);
module.exports = complaintRouter;