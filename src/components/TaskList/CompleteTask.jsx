import React from 'react'

const CompleteTask = ({emp}) => {
    return (
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
                    <button className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">Completed</button>
                </div>
            </div>
    )
}

export default CompleteTask