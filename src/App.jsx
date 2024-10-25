import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const auth = useContext(AuthContext);

  useEffect(() => {

    if (auth) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if (loggedInUser) {
        setUser(loggedInUser.role)
        setLoggedInUserData(loggedInUser.data)        
      }
    }
  }, [auth])

  const handelLogin = (email, password) => {
    const admin = auth?.admin.email === email && auth.admin.password === password;
    const employee = auth?.employees.find((emp) => email === emp.email && password === emp.password);
    if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: auth.admin }));
    } else if (employee) {
        setUser("employee");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard  changeUser={setUser} loggedInUserData={loggedInUserData} />
      ) : (
        <EmployeeDashboard changeUser={setUser} loggedInUserData={loggedInUserData} />
      )}
    </>
  );
};

export default App;
