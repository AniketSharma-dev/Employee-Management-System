import React, { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import Header from "./DashboardCompo/DashBNavbar/Header";
import TaskNumber from "./DashboardCompo/taskNumber/TaskNumber";

const EmployeeDashboard = ({ loggedInUserData }) => {
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

    if (!userData) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black text-white text-2xl font-bold">
                Loading...
            </div>
        );
    }
    return (
        <div className="bg-[#121212] w-full  px-20  h-screen">
            <Header emp={userData} />
            <TaskNumber emp={userData} />
            <TaskList emp={userData} />
        </div>
    );
};

export default EmployeeDashboard;
