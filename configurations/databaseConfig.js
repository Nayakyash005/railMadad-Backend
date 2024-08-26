const mongoose = require("mongoose");
// const { DATABASE_URL } = require("../env");
const env = require("dotenv");
env.config();
const connectDB = async () => {
  console.log(process.env.DATABASE_URL);
  const DATABASEURL = process.env.DATABASE_URL || "mongodb://localhost:27017/";
  try {
    await mongoose.connect("mongodb://localhost:27017/");

    console.log("Database connected ✌");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
