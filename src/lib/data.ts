import mongoose from "mongoose";

export async function connectDb() {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("🚀 MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
