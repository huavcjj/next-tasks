"use client";

import TaskCard from "@/ui/task-card";
import { TaskDocument } from "@/lib/definitions";
import { useOptimistic } from "react";

export function TaskList({ initialTasks }: { initialTasks: TaskDocument[] }) {
  const [tasks, setOptimisticTasks] = useOptimistic(initialTasks);

  const handleOptimisticDelete = (id: string) => {
    setOptimisticTasks(tasks.filter((task) => task._id !== id));
  };
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
          onOptimisticDelete={() => handleOptimisticDelete(task._id)}
        />
      ))}
    </div>
  );
}

export function TaskListIsCompleted({
  initialTasks,
}: {
  initialTasks: TaskDocument[];
}) {
  const [tasks, setOptimisticTasks] = useOptimistic(initialTasks);
  const handleOptimisticDelete = (id: string) => {
    setOptimisticTasks(tasks.filter((task) => task._id !== id));
  };
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
          onOptimisticDelete={() => handleOptimisticDelete(task._id)}
        />
      ))}
    </div>
  );
}

export function TaskListNotCompleted({
  initialTasks,
}: {
  initialTasks: TaskDocument[];
}) {
  const [tasks, setOptimisticTasks] = useOptimistic(initialTasks);
  const handleOptimisticDelete = (id: string) => {
    setOptimisticTasks(tasks.filter((task) => task._id !== id));
  };
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
          onOptimisticDelete={() => handleOptimisticDelete(task._id)}
        />
      ))}
    </div>
  );
}
