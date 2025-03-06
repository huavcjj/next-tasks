import { TaskCreateButton } from "@/ui/task-buttons";
import { Suspense } from "react";
import TaskSkeleton from "@/ui/skeletons";
import { TaskList } from "@/ui/task-list";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-black">All Tasks</h1>
        <TaskCreateButton />
      </header>

      <Suspense fallback={<TaskSkeleton count={3} />}>
        <TaskList />
      </Suspense>
    </div>
  );
}
