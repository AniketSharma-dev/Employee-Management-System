import React, { useEffect, useState } from 'react'
import Header from './DashboardCompo/DashBNavbar/Header'
import CreateTask from './DashboardCompo/AdminCreateTask/CreateTask'
import AllTask from './DashboardCompo/AllTask/AllTask'

const AdminDashboard = ({ loggedInUserData, changeUser }) => {
  const [userData, setUserData] = useState(loggedInUserData);

  useEffect(() => {
    const fetchData = () => {
      if (!userData) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser && loggedInUser.role === "admin") {
          setUserData(loggedInUser);
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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="loader w-fit h-[2.5rem] whitespace-pre text-white font-bold font-mono overflow-hidden leading-[1.2em] text-[30px] relative"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] w-full h-[200vh] px-20 ">
      <Header Admin={userData} changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
