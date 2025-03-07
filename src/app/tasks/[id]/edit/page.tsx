import EditTaskForm from "@/ui/edit-form";
import { fetchTaskById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await fetchTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-300 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Edit Task
        </h2>
        <EditTaskForm task={task} />
      </div>
    </div>
  );
}
