import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(() => {
    // Set the default date to today's date
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [taskEmployee, setTaskEmployee] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();


    const newTaskData ={
      taskTitle,
      taskDate,
      taskEmployee,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    setNewTask(newTaskData)
    const employee = JSON.parse(localStorage.getItem("employee"));
    

    employee.forEach((emp) => {
      if (emp.name === taskEmployee) {
        emp.tasks.push(newTaskData)
        console.log(emp.tasks);
      }
    });

    localStorage.setItem("employee", JSON.stringify(employee))


    // Clear the input fields
    setTaskTitle("");
    setTaskEmployee("");
    setTaskCategory("");
    setTaskDescription("");
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
            <div className="relative">
              <input
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
            <div className="relative">
              <input
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
            <div className="relative">
              <input
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
            <div className="relative">
              <input
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
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
            <div className="relative">
              <textarea
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
