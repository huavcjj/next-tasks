import { fetchTasks } from "@/lib/data";
import TaskCard from "@/ui/task-card";
import { TaskDocument } from "@/lib/defintions";

export async function TaskList() {
  const tasks: TaskDocument[] = await fetchTasks();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {tasks.map((task: TaskDocument) => (
        <TaskCard
          key={task._id}
          id={task._id}
          title={task.title}
          dueDate={task.dueDate}
          isCompleted={task.isCompleted}
          description={task.description}
        />
      ))}
    </div>
  );
}
