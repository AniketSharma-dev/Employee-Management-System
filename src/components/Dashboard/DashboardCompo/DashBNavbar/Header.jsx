import React from "react";

const Header = ({ Admin, emp, changeUser }) => {
  const isAdmin = Admin !== undefined;  
  const role = isAdmin ? "Admin" : "Employee";
  const name = isAdmin ? "Aniket" : emp.name || "Employee";

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    changeUser(null);
    // window.location.reload();
  }
  return (
    <div className="w-full py-8 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl text-white">
          Hello!
        </h1>
        <span className="text-5xl font-semibold text-white mt-2">
          {name}👋<sup className="text-[30px] text-red-300">{role}</sup>
        </span>
      </div>
      <button onClick={handleLogout}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full hover:from-red-600 hover:to-pink-600 transition duration-300 ease-in-out shadow-lg hover:shadow-red-500/30 transform hover:scale-105">
        Log Out
      </button>
    </div>
  );
};

export default Header;
