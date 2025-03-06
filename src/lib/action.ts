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
    state.error = "Failed to create task.";
    console.log("Error creating task:", error);
    return state;
  }

  redirect("/tasks");
}
