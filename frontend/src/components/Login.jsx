import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-12 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-white ">
          Login
        </h1>
        <form action="" className="mt-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Username
              </span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-white"
              type="text"
              placeholder="username@gmail.com"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Password
              </span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-white"
              type="password"
              placeholder="******"
            />
          </div>

          <p className="text-center text-black font-extrabold mt-2">
            Don't have an account ?
            <Link to="/signup" className="text-gray-800 font-bold ml-2">
              Sign Up
            </Link>
          </p>

          <div>
            <button className="btn btn-block btn-sm mt-3 border-slate-500 font-bold">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
