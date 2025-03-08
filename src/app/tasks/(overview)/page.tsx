import { TaskCreateButton } from "@/ui/task-buttons";
import { TaskList } from "@/ui/task-list";

export default async function Page() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-black">All Tasks</h1>
        <TaskCreateButton />
      </header>

      <TaskList />
    </div>
  );
}

export const dynamic = "force-dynamic";
