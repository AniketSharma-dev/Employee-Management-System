import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const fetchData = () => {
      const { employees } = getLocalStorage();
      if (employees) {
        setUserData(employees);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!userData) {
    // Return null or a loading indicator until data is available
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="loader w-fit h-[2.5rem] whitespace-pre text-white font-bold font-mono overflow-hidden leading-[1.2em] text-[30px] relative"></div>
      </div>
    );
  }

  return (
    <div>
      <AuthContext.Provider value={{userData, setUserData}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
