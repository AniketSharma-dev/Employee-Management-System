import React from "react";
import TaskList from "../TaskList/TaskList";
import Header from "./DashboardCompo/DashBNavbar/Header";
import TaskNumber from "./DashboardCompo/taskNumber/TaskNumber";

const EmployeeDashboard = ({user}) => {
    return (
        <div className="bg-[#121212] w-full  px-20  h-screen">
            <Header user={user} />
            <TaskNumber/>
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
