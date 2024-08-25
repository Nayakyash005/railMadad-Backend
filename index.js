const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./configurations/databaseConfig");
const path = require("path");
const cors = require("cors");
const app = express();

// cors configuration
const corsOptions = {
  origin: "https://localhost:3000",
  credential: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const port = 8800;
connectDB();

app.listen(8800, () => {
  console.log("your backend is runing on the port 8800");
});
