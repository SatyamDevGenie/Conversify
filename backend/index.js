import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import messageRoute from "./routes/mesageRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}`);
});
