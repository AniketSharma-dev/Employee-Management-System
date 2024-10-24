import React, { useEffect, useState } from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = ({ loggedInUserData }) => {
  const [userData, setUserData] = useState(loggedInUserData);

  useEffect(() => {
    const fetchData = () => {
      if (!userData) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser && loggedInUser.role === "admin") {
          setUserData(loggedInUser.data);
        }
      }
    }
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [userData]);

  if (!userData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#121212] w-full px-20 ">
      <Header Admin={userData} />
      <CreateTask Admin={userData} />
      <AllTask Admin={userData} />
    </div>
  )
}

export default AdminDashboard
