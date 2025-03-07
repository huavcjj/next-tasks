import { TaskEditButton } from "@/ui/task-buttons";
import { TaskDeleteButton } from "@/ui/delete-task";

export default function TaskCard({
  id,
  title,
  description,
  dueDate,
  isCompleted,
  onOptimisticDelete,
}: {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  onOptimisticDelete: () => void;
}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between w-full h-48">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-black">{title}</h2>
        <span className="text-gray-500 text-sm">{dueDate}</span>
      </div>

      <p className="text-gray-700 text-sm flex-grow">{description}</p>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            isCompleted ? "bg-black text-white" : "bg-gray-300 text-black"
          }`}
        >
          {isCompleted ? "✔ Completed" : "⚠ Expired"}
        </span>

        <div className="flex gap-2">
          <TaskEditButton id={id} />
          <TaskDeleteButton id={id} onOptimisticDelete={onOptimisticDelete} />
        </div>
      </div>
    </div>
  );
}
