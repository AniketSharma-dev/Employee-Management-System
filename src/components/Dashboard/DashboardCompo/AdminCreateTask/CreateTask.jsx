import React from 'react'

const CreateTask = () => {
    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold mb-8 text-white">Create New Task</h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-8">
                <form className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="task" className="mb-2 font-medium text-gray-300">Task Title</label>
                            <input type="text" id="task" placeholder="Enter Task Name" className="bg-gray-800 px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="date" className="mb-2 font-medium text-gray-300">Due Date</label>
                            <input type="date" id="date" className="bg-gray-800 px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white [color-scheme:dark]" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="e_name" className="mb-2 font-medium text-gray-300">Assign To</label>
                            <input type="text" id="e_name" placeholder="Employee Name" className="bg-gray-800 px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="category" className="mb-2 font-medium text-gray-300">Category</label>
                            <input type="text" id="category" placeholder="Design, Dev, etc" className="bg-gray-800 px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-white" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="description" className="mb-2 font-medium text-gray-300">Description</label>
                            <textarea name="Description" id="description" placeholder="Enter Description" rows="8" className="bg-gray-800 px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-white resize-none"></textarea>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
                                Create Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
