import React from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = ({user}) => {
  return (
    <div className="bg-[#121212] w-full px-20 ">
        <Header Admin={user} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
