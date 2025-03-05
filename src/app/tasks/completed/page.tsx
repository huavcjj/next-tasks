import TaskCard from "@/app/ui/task-card";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Completed Tasks</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        <TaskCard title="Task 1" description="This is the second task." />
      </div>
    </div>
  );
}
