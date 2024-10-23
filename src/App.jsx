import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {

  const [user, setUser] = useState(null)

  const handelLogin = (email, password) => {
    if (email === "admin@example.com" && password === "admin") {
      setUser("admin")
    } else if (email === "emp1@example.com" && password === "123") {
      setUser("emp1")
    } else {
      alert("Invalid Credentials");
    }
  }

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, [])


  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}

      {!user ? (<Login handelLogin={handelLogin} />) : user === "admin" ? (<AdminDashboard user={user} />) : (<EmployeeDashboard user={user} />)}
    </>
  );
};

export default App;
