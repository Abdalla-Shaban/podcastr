import mongoose from "mongoose";
import { MONGODB_URL } from "../utils/constants.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to database Successfully.");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
