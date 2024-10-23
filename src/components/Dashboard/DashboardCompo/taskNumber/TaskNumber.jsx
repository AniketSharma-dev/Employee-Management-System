import React from "react";

const TaskNumber = () => {
    return (
        <div className="flex mt-10 justify-between w-full  gap-5 ">
            <div className="w-[45%] p-10 bg-blue-400 rounded-xl">
                <h2 className="text-3xl font-semibold ">1</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-green-400 rounded-xl">
                <h2 className="text-3xl font-semibold ">3</h2>
                <h3 className="text-2xl font-medium">Completed Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-yellow-400 rounded-xl ">
                <h2 className="text-3xl text-black font-semibold ">0</h2>
                <h3 className="text-2xl text-black font-medium">Accepted Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-red-400 rounded-xl">
                <h2 className="text-3xl font-semibold ">0</h2>
                <h3 className="text-2xl font-medium">Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskNumber;