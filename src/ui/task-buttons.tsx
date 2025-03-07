import Link from "next/link";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";

export function TaskEditButton({ id }: { id: string }) {
  return (
    <Link href={`/tasks/${id}/edit`}>
      <button className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition">
        <PencilSquareIcon className="w-4 h-4" />
      </button>
    </Link>
  );
}

export function TaskCreateButton() {
  return (
    <Link href="/tasks/create">
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 transition">
        <PlusIcon className="w-5 h-5" />
        Add Task
      </button>
    </Link>
  );
}
