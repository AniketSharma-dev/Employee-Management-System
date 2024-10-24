import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const AllTask = ({ Admin }) => {
    const authData = useContext(AuthContext);

    console.log(authData.employees);
    
    return (
        <div className="w-full h-50 bg-[#1E1E1E] p-8 mt-10 flex flex-col gap-6 overflow-y-auto rounded-3xl custom-scrollbar shadow-md">
            <div className="grid grid-cols-5 text-gray-300 font-semibold mb-4 border-b-2 border-gray-600 pb-4">
                <h2 className="text-center">Employee Name</h2>
                <h2 className="text-center">New Task</h2>
                <h2 className="text-center">Active Task</h2>
                <h2 className="text-center">Completed</h2>
                <h2 className="text-center">Failed</h2>
            </div>
            {authData.employees.map((elem, idx) => {
                return (
                    <div key={idx} className="grid grid-cols-5 bg-gradient-to-br from-gray-900 to-gray-800 px-5 py-4 items-center rounded-xl shadow-lg border border-gray-700 transition-all duration-300  hover:shadow-indigo-500/30">
                        <h2 className="text-gray-300 font-semibold text-center">{elem.name}</h2>
                        <h3 className="text-2xl font-bold text-blue-400 text-center">{elem.taskCounts.newTask}</h3>
                        <h3 className="text-2xl font-bold text-yellow-400 text-center">{elem.taskCounts.active}</h3>
                        <h3 className="text-2xl font-bold text-green-400 text-center">{elem.taskCounts.completed}</h3>
                        <h3 className="text-2xl font-bold text-red-400 text-center">{elem.taskCounts.failed}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default AllTask;
