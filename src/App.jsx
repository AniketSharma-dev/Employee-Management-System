import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    // const admin = userData.email === email && auth.admin.password === password;
    const employee = userData.find(
      (emp) => email === emp.email && password === emp.password
    );
    if (email === "admin@example.com" && password === "admin") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (employee) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      return "Invalid Credentials";
    }
  };

  return (
    <>
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      ) : (
        <EmployeeDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;
