/** gaurentees user is logged in
 * @param {import("express").Request<ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>} req
 * @param {import("express").Response<any, Record<string, any>, number>} res
 * @param {import("express").NextFunction} next
 */

const twilio = require("twilio");
const env = require("dotenv");
env.config();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
console.log("acc id ", twilioAccountSid);
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioServiceSid = process.env.TWILIO_SERVICE_ID;

const client = twilio(twilioAccountSid, twilioAuthToken);

async function isAuthenticated(req, res, next) {
  // TODO: check if user is logged in.
  // 1. check cookies for user data 
  // 2. parse user data and store it in req.body.user
  // 3. return un-authenticated status

  // ye sb @/api/auth/verify-otp controller me kr.
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      res.json("Plz fill all provoded feilds");
    }

    // Verify the OTP using Twilio's Verify service
    const verificationCheck = await client.verify.v2
      .services(twilioServiceSid)
      .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status === "approved") {
      // OTP is correct, proceed to the next middleware
      console.log("approved");
      next();
    } else {
      // OTP is incorrect
      res.status(401).json({ message: "Unauthorized: Incorrect OTP" });
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
  // next();
}

module.exports = {
  isAuthenticated,
};
