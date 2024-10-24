import React from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = ({loggedInUserData}) => {
  return (
    <div className="bg-[#121212] w-full px-20 ">
      <Header Admin={loggedInUserData} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
