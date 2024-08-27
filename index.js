const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const connectDB = require("./configurations/databaseConfig");
const AuthRouter = require("./routes/auth");
const Userrouter = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 8800;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// CORS configuration
const corsOptions = {
  origin: FRONTEND_URL,
  credential: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/user", Userrouter);
app.get("/hi", (req, res) => {
  console.log("hello bhidu");
  res.json("hi");
});

async function main() {
  await connectDB(); // await database connection before listening to incoming requests

  app.listen(PORT, () => {
    console.log(`Your backend is running on port ${PORT}`);
  });
}

main();
