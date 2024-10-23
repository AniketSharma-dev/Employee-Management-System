import React from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = () => {
    const admin = "Admin Aniket"
  return (
    <div className="bg-[#1C1C1C] w-full  px-20  h-screen">
        <Header Admin={admin} />
        <CreateTask/>
        {/* <AllTask/> */}
    </div>
  )
}

export default AdminDashboard
