import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(() => {
    // Set the default date to today's date
    const today = new Date().toISOString().split("T")[0];
    return today;
  });
  const [taskEmployee, setTaskEmployee] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { userData, setUserData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

  // Create a new copy of userData
  const newData = userData.map(emp => {
    if (emp.name === taskEmployee) {
      // Creating a new employee object with updated tasks and task counts
      return {
        ...emp,
        tasks: [...emp.tasks, newTask], // Added new task
        taskCounts: {
          ...emp.taskCounts,
          newTask: emp.taskCounts.newTask + 1, // Increment new task count
        },
      };
    }
    return emp; // Return unchanged employee
  });

    // Update the context with the new data
    setUserData(newData);

    // Clear the input fields
    setTaskTitle("");
    setTaskEmployee("");
    setCategory("");
    setTaskDescription("");
    setTaskDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-1">
        Create New Task
      </h2>
      <div className="bg-[#1E1E1E] rounded-2xl p-8 shadow-2xl backdrop-blur-lg bg-opacity-80">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="w-full md:w-1/2 space-y-6">
            {/* Task Title */}
            <div className="relative">
              <input
                required
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                id="task"
                placeholder="Enter Task Name"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition duration-300 caret-white"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
            {/* Task Date */}
            <div className="relative">
              <input
                required
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                id="date"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition duration-300 caret-white [color-scheme:dark]"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
            {/* Task Employee */}
            <div className="relative">
              <input
                required
                value={taskEmployee}
                onChange={(e) => setTaskEmployee(e.target.value)}
                type="text"
                id="e_name"
                placeholder="Employee Name"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition duration-300 caret-white"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
            {/* Task Category */}
            <div className="relative">
              <input
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                id="category"
                placeholder="Design, Dev, etc"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition duration-300 caret-white"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            {/* Task Description */}
            <div className="relative">
              <textarea
                required
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                id="description"
                placeholder="Enter Description"
                rows="8"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition duration-300 caret-white resize-none"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              ></textarea>
            </div>
            {/* Create Task Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
