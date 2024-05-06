import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-9 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-white ">
          Register
        </h1>
        <form action="" className="mt-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Full Name
              </span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-white"
              type="text"
              placeholder="Full Name"
            />
          </div>
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
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Confirm Password
              </span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-white"
              type="password"
              placeholder="******"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p className="text-black">Male</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p className="text-black">Female</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>

          <p className="text-center text-black font-extrabold">
            Already have an account ?
            <Link to="/login" className="text-gray-800 font-bold ml-2">
              Login Here
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

export default Signup;
