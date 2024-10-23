import React from "react";

const TaskList = () => {
    return (
        <div id="slider" className="h-[45%] w-full flex items-center justify-start flex-nowrap overflow-x-auto gap-8 py-8 mt-10 scrollbar-hide">
            <div className="h-full w-[335px] shrink-0 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg">Critical</h3>
                    <h4 className="text-gray-400 text-xs font-medium">20 Feb 2024</h4>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">Launch New Product</h2>
                <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    Coordinate with marketing team for the big reveal. Ensure all features are polished and ready for demo.
                </p>
                <div className="mt-6 flex justify-end">
                    <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">View Task</button>
                </div>
            </div>
            <div className="h-full w-[335px] shrink-0 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/30">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg">Urgent</h3>
                    <h4 className="text-gray-400 text-xs font-medium">22 Feb 2024</h4>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-3">Client Presentation</h2>
                <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    Prepare slides and rehearse for the upcoming client meeting. Focus on key metrics and future projections.
                </p>
                <div className="mt-6 flex justify-end">
                    <button className="text-xs bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">View Task</button>
                </div>
            </div>
            <div className="h-full w-[335px] shrink-0 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-green-500/30">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg">In Progress</h3>
                    <h4 className="text-gray-400 text-xs font-medium">25 Feb 2024</h4>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-3">Optimize Database</h2>
                <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    Implement indexing and query optimization to improve overall system performance. Monitor and document changes.
                </p>
                <div className="mt-6 flex justify-end">
                    <button className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">View Task</button>
                </div>
            </div>
            <div className="h-full w-[335px] shrink-0 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="bg-gradient-to-r from-blue-400 to-cyan-500 px-4 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg">Planning</h3>
                    <h4 className="text-gray-400 text-xs font-medium">28 Feb 2024</h4>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-3">Q2 Strategy Meeting</h2>
                <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    Outline goals for the next quarter. Prepare market analysis and competitor research for team discussion.
                </p>
                <div className="mt-6 flex justify-end">
                    <button className="text-xs bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">View Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
