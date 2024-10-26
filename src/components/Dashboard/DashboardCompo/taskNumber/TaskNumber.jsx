import React from "react";

const TaskNumber = ({ emp }) => {            
    return (
        <div className="grid grid-cols-4 gap-6 mt-10">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-blue-400 mb-2">{emp.taskCounts.newTask}</h2>
                    <h3 className="text-lg font-medium text-blue-200">New Tasks</h3>
                </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 w-full"></div>
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-green-400 mb-2">{emp.taskCounts.completed}</h2>
                    <h3 className="text-lg font-medium text-green-200">Completed Tasks</h3>
                </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-full"></div>
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-2">{emp.taskCounts.active}</h2>
                    <h3 className="text-lg font-medium text-yellow-200">Accepted Tasks</h3>
                </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="h-1 bg-gradient-to-r from-red-400 to-red-600 w-full"></div>
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-red-400 mb-2">{emp.taskCounts.failed}</h2>
                    <h3 className="text-lg font-medium text-red-200">Failed Tasks</h3>
                </div>
            </div>
        </div>
    );
};

export default TaskNumber;
