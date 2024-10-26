import React, { useEffect, useState } from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";

const TaskList = ({ emp, updateUserData }) => {
  const [tasks, setTasks] = useState(emp.tasks);
  const [taskCounts, setTaskCounts] = useState(emp.taskCounts);

  const updateTaskCounts = () => {
    const activeCount = tasks.filter((task) => task.active).length;
    const newCount = tasks.filter((task) => task.newTask).length;
    const completedCount = tasks.filter((task) => task.completed).length;
    const failedCount = tasks.filter((task) => task.failed).length;

    setTaskCounts({
      active: activeCount,
      newTask: newCount,
      completed: completedCount,
      failed: failedCount,
    });
    // Update user data with new task counts
    updateUserData({
      ...emp,
      taskCounts: {
        active: activeCount,
        newTask: newCount,
        completed: completedCount,
        failed: failedCount,
      },
    });
  };

  useEffect(() => {
    updateTaskCounts();
  }, [tasks]);

  const updateTaskStatus = (index, status) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = { ...updatedTasks[index], ...status };
      return updatedTasks;
    });
  };

  return (
    <div className="h-[45%] w-full flex items-center justify-start flex-nowrap overflow-x-auto gap-8 py-8 mt-10 custom-scrollbar scroll ">
      {tasks.map((task, idx) => {
        if (task.active) {
          return (
            <AcceptTask
              key={idx}
              emp={task}
              updateTaskStatus={(status) => updateTaskStatus(idx, status)}
            />
          );
        } else if (task.completed) {
          return (
            <CompleteTask
              key={idx}
              emp={task}
              updateTaskStatus={(status) => updateTaskStatus(idx, status)}
            />
          );
        } else if (task.newTask) {
          return (
            <NewTask
              key={idx}
              emp={task}
              updateTaskStatus={(status) => updateTaskStatus(idx, status)}
            />
          );
        } else if (task.failed) {
          return (
            <FailedTask
              key={idx}
              emp={task}
              updateTaskStatus={(status) => updateTaskStatus(idx, status)}
            />
          );
        }
      })}
    </div>
  );
};

export default TaskList;
