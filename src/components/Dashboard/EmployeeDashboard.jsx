import React from "react";
import TaskList from "../TaskList/TaskList";
import Header from "./DashboardCompo/DashBNavbar/Header";
import TaskNumber from "./DashboardCompo/taskNumber/TaskNumber";

const EmployeeDashboard = ({loggedInUserData}) => {    
    return (
        <div className="bg-[#121212] w-full  px-20  h-screen">
            <Header emp={loggedInUserData} />
            <TaskNumber />
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
