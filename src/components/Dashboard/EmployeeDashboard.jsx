import React from "react";
import Header from "./DashBNavbar/header";
import TaskNumber from "./taskNumber/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
    return (
        <div className="bg-[#1C1C1C] w-full  px-20  h-screen">
            <Header />
            <TaskNumber />
            <TaskList/>
        </div>
    );
};

export default EmployeeDashboard;
