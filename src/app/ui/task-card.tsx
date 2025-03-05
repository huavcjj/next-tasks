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
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between w-full h-48">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-black">{title}</h2>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>

      <p className="text-gray-700 text-sm flex-grow">{description}</p>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            status ? "bg-black text-white" : "bg-gray-300 text-black"
          }`}
        >
          {status ? "✔ Completed" : "⚠ Expired"}
        </span>

        <div className="flex gap-2">
          <TaskEditButton id="1" />
          <TaskDeleteButton id="1" />
        </div>
      </div>
    </div>
  );
}
