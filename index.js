const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");

const connectDB = require("./configurations/databaseConfig");
const { PhoneAuthRouter } = require("./routes/auth/phone");

const app = express();
const PORT = process.env.PORT || 8080;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://localhost:3000";

// cors configuration
const corsOptions = {
  origin: FRONTEND_URL,
  credential: true,
};

// Middlewares
// app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// Routes
app.use("/api/auth/phone", PhoneAuthRouter);







async function main() {
  await connectDB();  // await database connection before listning to incomming request
  
  app.listen(PORT, () => {
    console.log("your backend is runing on the port 8800");
  });

}

main();
