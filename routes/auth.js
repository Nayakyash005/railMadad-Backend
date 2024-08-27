const express = require("express");
const AuthRouter = express.Router();
const { sendOtp } = require("../controller/authController");
const { isAuthenticated } = require("../middlewares/auth");

// @/api/auth/send-otp

AuthRouter.post("/send-otp", sendOtp);

// @/api/auth/verify-otp
AuthRouter.post("/verify-otp", isAuthenticated, (req, res) => {
  console.log("call hua");
  res.send("hurrayh");
});

module.exports = AuthRouter;
