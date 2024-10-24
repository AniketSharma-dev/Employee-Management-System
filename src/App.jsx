import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const auth = useContext(AuthContext);

  // useEffect(() => {

  //   if (auth) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  //     console.log(loggedInUser);

  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [auth])

  const handelLogin = (email, password) => {
    const admin =
      auth.admin.email === email && auth.admin.password === password;
    if (auth && admin) {
      if (admin) {
        setUser("admin");
        setLoggedInUserData(auth.admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      }
    } else if (auth && auth.employees) {
      const employee = auth.employees.find(
        (emp) => email === emp.email && password === emp.password
      );
      if (employee) {
        const { id } = employee;
        setUser(id);
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", id })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {/* {!user ? <Login handelLogin={handelLogin} /> : ""} */}

      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard loggedInUserData={loggedInUserData} />
      ) : (
        <EmployeeDashboard loggedInUserData={loggedInUserData} />
      )}
    </>
  );
};

export default App;
