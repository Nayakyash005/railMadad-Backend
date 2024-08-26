const express = require("express");
const AuthRouter = express.Router();
const { sendOtp } = require("../controller/authController");
const { isAuthenticated } = require("../middlewares/auth");

AuthRouter.post("/send-otp", sendOtp);
AuthRouter.post("/verify-otp", isAuthenticated, (req, res) => {
  console.log("call hua");
  res.send("hurrayh");
});

module.exports = AuthRouter;
