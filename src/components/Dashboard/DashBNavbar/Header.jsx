import React from "react";

const Header = () => {
  return (
    <div className="w-full py-5 flex justify-between items-center">
      <h1 className="text-4xl">
        Hello! <br />
        <span className="text-5xl">Aniket Sharma👋</span>
      </h1>
      <button className="bg-red-500 font-bold px-5 py-4 rounded-[10px]">Log Out</button>
    </div>
  );
};

export default Header;
