import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

  const [user, setUser] = useState(null)

  const handelLogin = (email, password) => {
    if (email === "admin@example.com" && password === "admin") {
      console.log("This is Admin");
    } else if (email === "emp1@example.com" && password === "123") {
      console.log("This is Employee 1");
    } else {
      console.log("Invalid Credentials");
    }
  }

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, [])


  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}

      <EmployeeDashboard />
      <AdminDashboard/>
    </>
  );
};

export default App;
