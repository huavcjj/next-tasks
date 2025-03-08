import TaskCards from "@/ui/task-cards";
import { TaskDocument } from "@/lib/definitions";
import { fetchTasks } from "@/lib/data";
import TaskSkeleton from "@/ui/skeletons";
import { Suspense } from "react";

export async function TaskList() {
  const tasks = await fetchTasks();

  return (
    <Suspense fallback={<TaskSkeleton count={tasks.length} />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        {tasks.map((task) => (
          <TaskCards
            key={task._id}
            id={task._id}
            title={task.title}
            dueDate={task.dueDate}
            isCompleted={task.isCompleted}
            description={task.description}
          />
        ))}
      </div>
    </Suspense>
  );
}

export async function TaskListIsCompleted() {
  const tasks = await fetchTasks();
  const filteredTasks = tasks.filter((task) => task.isCompleted);

  return (
    <Suspense fallback={<TaskSkeleton count={filteredTasks.length} />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        {filteredTasks.map((task: TaskDocument) => (
          <TaskCards
            key={task._id}
            id={task._id}
            title={task.title}
            dueDate={task.dueDate}
            isCompleted={task.isCompleted}
            description={task.description}
          />
        ))}
      </div>
    </Suspense>
  );
}

export async function TaskListNotCompleted() {
  const tasks = await fetchTasks();
  const filteredTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <Suspense fallback={<TaskSkeleton count={filteredTasks.length} />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        {filteredTasks.map((task: TaskDocument) => (
          <TaskCards
            key={task._id}
            id={task._id}
            title={task.title}
            dueDate={task.dueDate}
            isCompleted={task.isCompleted}
            description={task.description}
          />
        ))}
      </div>
    </Suspense>
  );
}
