import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}`);
});
