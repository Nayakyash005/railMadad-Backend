const twilio = require("twilio");
const env = require("dotenv");
env.config();
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
console.log("acc id ", twilioAccountSid);
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioServiceSid = process.env.TWILIO_SERVICE_ID;

const client = twilio(twilioAccountSid, twilioAuthToken);

const sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Send OTP using Twilio's Verify service
    const verification = await client.verify.v2
      .services(twilioServiceSid)
      .verifications.create({ to: phone, channel: "sms" });

    if (verification.status === "pending") {
      res.status(200).json({ message: "OTP sent successfully" });
    } else {
      res.status(500).json({ message: "Failed to send OTP" });
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const Complain = require('../models/Complain');

const ComplaintControler = async (req, res) => {
  try {
    console.log(req.body);
    const { phone, discription, image_url, pnr } = req.body;

    if (!phone || !discription || !image_url || !pnr) {
      return res.status(400).send("All fields are required");
    }

    const complaint = new Complain({ phone, discription, image_url, pnr });
    await complaint.save();

    res.status(201).send({
      success: true,
      message: "Complaint registered successfully",
      complaint,
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).send({
      success: false,
      message: 'Error in registration',
      error: error.message,
    });
  }
};
module.exports = {sendOtp,ComplaintControler}