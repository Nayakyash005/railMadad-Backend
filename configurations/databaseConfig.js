const mongoose = require("mongoose");
const { DATABASE_URL } = require("../env");

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);

    console.log("Database connected ✌");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
