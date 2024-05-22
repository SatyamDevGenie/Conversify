import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          username: user.username,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data); // Log the server error response
    }

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-12 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-white ">
          Login
        </h1>
        <form onSubmit={onSubmitHandler} action="" className="mt-5">
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
            <button
              type="submit"
              className="btn btn-block btn-md mt-3 border-slate-500 font-bold"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
