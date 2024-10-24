import React from 'react'

const AllTask = ({Admin}) => {
  return (
    <div className="w-full h-48 bg-[#1C1C1C] p-5 mt-10 flex flex-col gap-5 overflow-y-auto rounded-3xl custom-scrollbar">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-4 px-5 flex justify-between items-center rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-red-500/30">
            <h2 className="text-white font-semibold">Aniket</h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">Make a UI Design</h3>
            <h5 className="text-xs bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 rounded-full text-white font-bold uppercase">Pending</h5>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-4 px-5 flex justify-between items-center rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-500/30">
            <h2 className="text-white font-semibold">John</h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 font-bold">Develop Backend API</h3>
            <h5 className="text-xs bg-gradient-to-r from-blue-400 to-cyan-500 px-3 py-1 rounded-full text-white font-bold uppercase">In Progress</h5>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-4 px-5 flex justify-between items-center rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-purple-500/30">
            <h2 className="text-white font-semibold">Sarah</h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 font-bold">Test Application</h3>
            <h5 className="text-xs bg-gradient-to-r from-purple-400 to-indigo-500 px-3 py-1 rounded-full text-white font-bold uppercase">Completed</h5>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-4 px-5 flex justify-between items-center rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-green-500/30">
            <h2 className="text-white font-semibold">Mike</h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-bold">Deploy to Production</h3>
            <h5 className="text-xs bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-1 rounded-full text-white font-bold uppercase">Pending</h5>
        </div>
    </div>
  )
}

export default AllTask
