import { TaskDeleteButton, TaskEditButton } from "@/app/ui/task-buttons";

export default function TaskCard({
  title,
  description,
  date,
  status,
}: {
  title: string;
  description: string;
  date?: string;
  status?: boolean;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between w-full h-56">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>

      <p className="text-gray-600 text-sm flex-grow">{description}</p>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <span
          className={`px-4 py-1 text-sm font-semibold rounded-full flex items-center gap-2 ${
            status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {status ? "✔ Completed" : "⚠ Expired"}
        </span>

        <div className="flex gap-2 flex-wrap">
          <TaskEditButton id="1" />
          <TaskDeleteButton id="1" />
        </div>
      </div>
    </div>
  );
}
