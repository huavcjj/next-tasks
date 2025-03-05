import Link from "next/link";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"; // 編集ボタン

export function TaskEditButton({ id }: { id: string }) {
  return (
    <Link href={`/tasks/${id}/edit`}>
      <button className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition">
        <PencilSquareIcon className="w-4 h-4" />
      </button>
    </Link>
  );
}

export function TaskDeleteButton({ id }: { id: string }) {
  return (
    <form action="">
      <button
        type="submit"
        className="flex items-center justify-center w-9 h-9 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
      >
        <TrashIcon className="w-4 h-4" />
      </button>
    </form>
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
