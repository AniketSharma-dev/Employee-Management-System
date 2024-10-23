import React from 'react'

const AllTask = () => {
  return (
    <div className="w-full h-48 bg-[#1C1C1C] p-5 mt-10 flex flex-col gap-5 overflow-auto">
        <div className="bg-red-500 py-4 px-5 flex justify-between items-center rounded">
            <h2 className="text-white font-semibold">Aniket</h2>
            <h3 className="text-white">Make a UI Design</h3>
            <h5 className="text-white font-medium">Pending</h5>
        </div>
        <div className="bg-blue-500 py-4 px-5 flex justify-between items-center rounded">
            <h2 className="text-white font-semibold">John</h2>
            <h3 className="text-white">Develop Backend API</h3>
            <h5 className="text-white font-medium">In Progress</h5>
        </div>
        <div className="bg-purple-500 py-4 px-5 flex justify-between items-center rounded">
            <h2 className="text-white font-semibold">Sarah</h2>
            <h3 className="text-white">Test Application</h3>
            <h5 className="text-white font-medium">Completed</h5>
        </div>
        <div className="bg-green-500 py-4 px-5 flex justify-between items-center rounded">
            <h2 className="text-white font-semibold">Mike</h2>
            <h3 className="text-white">Deploy to Production</h3>
            <h5 className="text-white font-medium">Pending</h5>
        </div>
    </div>
  )
}

export default AllTask