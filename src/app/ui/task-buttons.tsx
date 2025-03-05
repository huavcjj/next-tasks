import Link from "next/link";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export function TaskEditButton({ id }: { id: string }) {
  return (
    <Link href={`/tasks/${id}/edit`}>
      <button className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition">
        <PencilSquareIcon className="w-5 h-5" />
      </button>
    </Link>
  );
}

export function TaskDeleteButton({ id }: { id: string }) {
  return (
    <form action="">
      <button
        type="submit"
        className="flex items-center gap-2 bg-red-300 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </form>
  );
}

export function TaskCreateButton() {
  return (
    <Link href="/tasks/create">
      <button className="flex items-center gap-2 bg-gray-400/80 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-500 transition">
        <PlusIcon className="w-5 h-5 text-white" />
        Add Task
      </button>
    </Link>
  );
}
