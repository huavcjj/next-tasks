"use client";

import { TaskDocument } from "@/lib/definitions";
import { FormState, updateTask } from "@/lib/action";
import { useActionState } from "react";

export default function EditTaskForm({ task }: { task: TaskDocument }) {
  const initialState: FormState = { error: "" };
  const [state, formAction] = useActionState(updateTask, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="id" value={task._id} />

      <div>
        <label htmlFor="title" className="block text-white font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={task.title}
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-white font-semibold mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={task.description}
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task description"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="dueDate"
          className="block text-white font-semibold mb-1"
        >
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          defaultValue={task.dueDate}
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="isCompleted"
          className="block text-white font-semibold mb-2"
        >
          isCompleted
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="completed"
              name="isCompleted"
              value="true"
              defaultChecked={task.isCompleted}
              className="w-5 h-5 accent-gray-900 cursor-pointer"
            />
            <span className="text-black">Completed</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="expired"
              name="isCompleted"
              value="false"
              defaultChecked={!task.isCompleted}
              className="w-5 h-5 accent-gray-900 cursor-pointer"
            />
            <span className="text-black">Expired</span>
          </label>
        </div>
      </div>

      {state?.error && <p className="text-red-500">{state.error}</p>}

      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition"
      >
        Edit
      </button>
    </form>
  );
}
