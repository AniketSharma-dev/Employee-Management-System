import React, { useState } from "react";

const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    const result = handelLogin(email, password);
    if (result === "Invalid Credentials") {
      setError("Invalid Credentials");
    } else {
      setError("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#121212]">
      <div className="bg-[#1E1E1E] rounded-2xl p-10 shadow-2xl w-[400px] backdrop-blur-lg bg-opacity-80">
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-1">
          Login
        </h2>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col items-center justify-center gap-6"
        >
          <div className="w-full space-y-5">
            {/* Email */}
            <div className="relative">
              {error && <sub className="text-red-500 absolute -top-5 left-0">{error}</sub>}
              <input
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-900 transition duration-300 caret-white"
                autoComplete="on"
                required
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
            {/* Password */}
            <div className="relative">
              <input
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-5 py-4 bg-[#2A2A2A] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-900 transition duration-300 caret-white"
                autoComplete="on"
                required
                style={{
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0px 1000px #2A2A2A inset",
                }}
              />
            </div>
          </div>
          {/* Log In Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
            Log In
          </button>
        </form>
        {/* Forgot Password and Create Account */}
        <div className="mt-8 flex justify-between items-center text-sm">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            Forgot Password?
          </a>
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 transition duration-300"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
