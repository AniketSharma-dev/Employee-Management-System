import React, { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import Header from "./DashboardCompo/DashBNavbar/Header";
import TaskNumber from "./DashboardCompo/taskNumber/TaskNumber";

const EmployeeDashboard = ({ loggedInUserData, changeUser }) => {
  const [userData, setUserData] = useState(loggedInUserData);

  useEffect(() => {
    const fetchData = () => {
      if (!userData) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser && loggedInUser.role === "employee") {
          setUserData(loggedInUser.data);
        }
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [userData]);

  const updateUserData = (updatedData) => {
    setUserData(updatedData);
    
  };

  if (!userData) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="loader w-fit h-[2.5rem] whitespace-pre text-white font-bold font-mono overflow-hidden leading-[1.2em] text-[30px] relative"></div>
      </div>
    );
  }
  return (
    <div className="bg-[#121212] w-full  px-20  h-screen">
      <Header emp={userData} changeUser={changeUser} />
      <TaskNumber emp={userData} />
      <TaskList emp={userData} updateUserData={updateUserData} />
    </div>
  );
};

export default EmployeeDashboard;
