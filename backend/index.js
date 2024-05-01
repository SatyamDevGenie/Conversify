import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}`);
});
