"use server";

import { Task, TaskModel, User, UserModel } from "@/lib/definitions";
import { connectDb } from "@/lib/data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export interface FormState {
  error: string;
}

export async function createTaskAction(state: FormState, formData: FormData) {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return { error: "Unauthorized: No token provided" };
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    userId: string;
  };
  const userId = new mongoose.Types.ObjectId(decoded.userId);

  const newTask: Task = {
    userId,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };
  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    return { error: "Failed to create task" };
  }

  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function updateTaskAction(state: FormState, formData: FormData) {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return { error: "Unauthorized: No token provided" };
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    userId: string;
  };
  const userId = new mongoose.Types.ObjectId(decoded.userId);
  const id = formData.get("id") as string;

  const updatedTask: Task = {
    userId: userId,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: formData.get("isCompleted")?.toString() === "true",
  };

  try {
    await connectDb();
    const task = await TaskModel.findOneAndUpdate(
      { _id: id, userId: userId },
      updatedTask,
    );
    if (!task) {
      return { error: "Task not found or unauthorized" };
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return { error: "Failed to update task" };
  }

  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function deleteTaskAction(state: FormState, id: string) {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return { error: "Unauthorized: No token provided" };
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    userId: string;
  };
  const userId = new mongoose.Types.ObjectId(decoded.userId);
  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id, userId });
  } catch (error) {
    console.error("Error deleting task:", error);
    return { error: "Failed to delete task" };
  }

  revalidatePath("/tasks");
}

export async function registerAction(state: FormState, formData: FormData) {
  const newUser: User = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await connectDb();
    const existingUser = await UserModel.findOne({ email: newUser.email });
    if (existingUser) {
      return { error: "Email is already in use" };
    }
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user = await UserModel.create({
      name: newUser.name,
      email: newUser.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60,
      path: "/",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return { error: "Registration failed" };
  }

  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function loginAction(state: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await connectDb();

    const user = await UserModel.findOne({ email });
    if (!user) {
      return { error: "Invalid email or password" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid email or password" };
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60,
      path: "/",
    });
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Login failed" };
  }

  revalidatePath("/tasks");
  redirect("/tasks");
}
