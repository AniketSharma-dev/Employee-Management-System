import React from "react";

const TaskList = () => {
    return (
        <div id="slider" className="h-[45%] w-full  flex items-center justify-start flex-nowrap overflow-x-auto gap-5 py-5 mt-10">
            <div className="h-full w-[335px] shrink-0 p-5 bg-red-400 rounded-xl ">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-700 px-3 py-1 text-xl rounded">High</h3>
                    <h4 className="font-semibold">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">Make a Youtube Video</h2>
                <p className="text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                    id iure esse molestiae rerum voluptatibus.
                </p>
            </div>
            <div className="h-full w-[335px] shrink-0 p-5 bg-yellow-400 rounded-xl ">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-700 px-3 py-1 text-xl rounded">High</h3>
                    <h4 className="font-semibold">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">Make a Youtube Video</h2>
                <p className="text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                    id iure esse molestiae rerum voluptatibus.
                </p>
            </div>
            <div className="h-full w-[335px] shrink-0 p-5 bg-green-400 rounded-xl ">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-700 px-3 py-1 text-xl rounded">High</h3>
                    <h4 className="font-semibold">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">Make a Youtube Video</h2>
                <p className="text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                    id iure esse molestiae rerum voluptatibus.
                </p>
            </div>
            <div className="h-full w-[335px] shrink-0 p-5 bg-blue-400 rounded-xl ">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-700 px-3 py-1 text-xl rounded">High</h3>
                    <h4 className="font-semibold">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">Make a Youtube Video</h2>
                <p className="text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                    id iure esse molestiae rerum voluptatibus.
                </p>
            </div>
        </div>
    );
};

export default TaskList;
