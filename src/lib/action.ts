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
