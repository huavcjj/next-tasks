"use client";

import { createTaskAction, FormState } from "@/lib/action";
import { useActionState } from "react";

export default function CreateTaskForm() {
  const initialState: FormState = { error: "" };
  const [state, formAction, pending] = useActionState(
    createTaskAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-black font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-black font-semibold mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task description"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="dueDate"
          className="block text-black font-semibold mb-1"
        >
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`w-full py-3 rounded-lg font-semibold text-lg transition ${
          pending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-300"
        }`}
      >
        {pending ? "Creating..." : "Create"}
      </button>

      {state.error && (
        <p className="text-red-500 font-semibold">{state.error}</p>
      )}
    </form>
  );
}
