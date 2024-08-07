import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  const navigate = useNavigate(); // to navigate

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`);
      navigate("/login"); // navigate to login page
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn btn-circle bg-zinc-700 text-white">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className="mt-2">
        <button
          onClick={logoutHandler}
          className="btn btn-sm bg-slate-600 text-black"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
