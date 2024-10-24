import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)


  useEffect(() => {

    setLocalStorage()

    const fetchData = () => {
      const { employees, admin } = getLocalStorage();
      if (employees && admin) {
        setUserData({ employees, admin });
      }
    }


    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);

  }, [])


  if (!userData) {
    // Return null or a loading indicator until data is available
    return <div className='w-full h-screen flex items-center justify-center bg-black text-white text-2xl font-bold' >Loading...</div>
  }


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider