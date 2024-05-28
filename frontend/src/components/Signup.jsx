import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      toast.error(error.response.data.message); // Log the server error response
      console.log(error);
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-9 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-white">
          Register
        </h1>
        <form onSubmit={onSubmitHandler} className="mt-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Full Name
              </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-10 bg-white"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Username
              </span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10 bg-white"
              type="email"
              placeholder="username@gmail.com"
              required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Password
              </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10 bg-white"
              type="password"
              placeholder="******"
              required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10 bg-white"
              type="password"
              placeholder="******"
              required
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p className="text-black">Male</p>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                className="mx-2"
              />
            </div>
            <div className="flex items-center">
              <p className="text-black">Female</p>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                className="mx-2"
              />
            </div>
          </div>

          <p className="text-center text-black font-extrabold my-2">
            Already have an account?
            <Link to="/login" className="text-gray-800 font-bold ml-2">
              Login Here
            </Link>
          </p>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-md mt-3 border-slate-500 font-bold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
