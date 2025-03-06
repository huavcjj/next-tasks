"use server";

import { Task, TaskModel } from "@/lib/defintions";
import { connectDb } from "@/lib/data";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export async function createTask(state: FormState, formData: FormData) {
  const newTask: Task = {
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

  redirect("/tasks");
}

export async function updateTask(state: FormState, formData: FormData) {
  const id = formData.get("id") as string;

  const updatedTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: formData.get("isCompleted")?.toString() === "true",
  };

  try {
    await connectDb();
    await TaskModel.findByIdAndUpdate(id, updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    return { error: "Failed to update task" };
  }

  redirect("/tasks");
}
