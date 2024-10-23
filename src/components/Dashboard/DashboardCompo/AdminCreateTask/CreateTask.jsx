import React from 'react'

const CreateTask = () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Create New Task</h2>
            <form className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4 space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="task" className="mb-2 font-medium text-white">Task Title</label>
                        <input type="text" id="task" placeholder="Enter Task Name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date" className="mb-2 font-medium text-white">Due Date</label>
                        <input type="date" id="date" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="e_name" className="mb-2 font-medium text-white">Assign To</label>
                        <input type="text" id="e_name" placeholder="Employee Name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="profession" className="mb-2 font-medium text-white">Profession</label>
                        <input type="text" id="profession" placeholder="Design, Dev, etc" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0">
                    <div className="flex flex-col items-start">
                        <label htmlFor="description" className="mb-2 font-medium text-white">Description</label>
                        <textarea name="Description" id="description" placeholder="Enter Description" rows="10" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800"></textarea>
                    </div>
                    <div className="flex justify-start mt-6 md:mt-10">
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Create Task</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateTask