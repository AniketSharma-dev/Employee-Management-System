import React from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = () => {
    const admin = "Admin Aniket"
  return (
    <div className="bg-[#000000] w-full px-20 ">
        <Header Admin={admin} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
