import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div>
      <form action="">
        <input
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button>
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
