"use client";

import { deleteTaskAction, FormState } from "@/lib/action";
import React, { useActionState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export function TaskDeleteButton({ id }: { id: string }) {
  const initialState: FormState = { error: "" };
  const deleteTaskActionWithId = deleteTaskAction.bind(null, initialState, id);
  const [state, formAction] = useActionState(
    deleteTaskActionWithId,
    initialState,
  );

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="flex items-center justify-center w-9 h-9 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
      >
        <TrashIcon className="w-4 h-4" />
      </button>

      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
