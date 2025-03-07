import mongoose from "mongoose";
import { TaskDocument } from "@/lib/definitions";

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

export async function fetchTasks(): Promise<TaskDocument[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();
    return data.tasks as TaskDocument[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Failed to fetch tasks");
  }
}

export async function fetchTaskById(id: string): Promise<TaskDocument> {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();
    return data.task as TaskDocument;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw new Error("Failed to fetch task");
  }
}
