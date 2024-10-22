import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "User Email : " + email + "\nUser Password : " + password + "\nSubmited"
    );
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <div className="border-2 rounded-2xl px-32 py-28 border-emerald-700">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full flex flex-col items-center justify-center gap-7"
        >
          <div className="flex flex-col gap-3">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter Your Email"
              className="border-2 border-blue-600 rounded-full outline-none bg-transparent px-5 py-3  placeholder:text-gray-400"
              required
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Your Password"
              className="border-2 border-blue-600 rounded-full outline-none bg-transparent px-5 py-3  placeholder:text-gray-400"
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
