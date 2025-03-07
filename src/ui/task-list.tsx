import { fetchTasks } from "@/lib/data";
import TaskCard from "@/ui/task-card";
import { TaskDocument } from "@/lib/definitions";

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

export async function TaskListIsCompleted() {
  const tasks: TaskDocument[] = await fetchTasks();

  const filteredTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {filteredTasks.map((task: TaskDocument) => (
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

export async function TaskListNotCompleted() {
  const tasks: TaskDocument[] = await fetchTasks();

  const filteredTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {filteredTasks.map((task: TaskDocument) => (
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
