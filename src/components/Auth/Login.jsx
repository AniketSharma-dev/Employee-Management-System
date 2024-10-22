import React from "react";

const Login = () => {

  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <div className="border-2 rounded-2xl px-32 py-28 border-emerald-700">
        <form className="w-full flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col gap-3">
            <input
              className="border-2 border-blue-600 rounded-full outline-none bg-transparent px-5 py-3  placeholder:text-gray-400"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              className="border-2 border-blue-600 rounded-full outline-none bg-transparent px-5 py-3  placeholder:text-gray-400"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button className="border-none  w-full rounded-full outline-none bg-yellow-400 px-5 py-3 placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
