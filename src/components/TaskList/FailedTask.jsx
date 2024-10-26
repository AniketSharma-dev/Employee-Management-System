import React from "react";

const FailedTask = ({ emp, updateTaskStatus }) => {
  const AddToCompleted = () => {
    updateTaskStatus({ completed: true, failed: false });
  };

  return (
    <div className="h-full w-[335px] shrink-0 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-red-500/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg">
          {emp.category}
        </h3>
        <h4 className="text-gray-400 text-xs font-medium">{emp.taskDate}</h4>
      </div>
      <h2 className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-3">
        {emp.taskTitle}
      </h2>
      <p className="text-sm mt-2 text-gray-300 line-clamp-3 mb-4">
        {emp.taskDescription}
      </p>
      <div className="flex justify-center items-center mb-4">
        <h3 className="text-red-200 text-base font-bold">Failed Task</h3>
      </div>
      <div className="flex justify-between gap-2">
        <button
          onClick={AddToCompleted}
          className="text-xs bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Add to Completed
        </button>
        <button className="text-xs bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
