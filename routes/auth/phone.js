const express = require("express");

const PhoneAuthRouter = express.Router();

PhoneAuthRouter.get("*", (req, res) => {
    res.send("Hello! 🙋‍♂️");
});

module.exports = { PhoneAuthRouter };
