import React from "react";
import MessageContainer from "./MessageContainer";
import Sidebar from "./Sidebar";

export const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default HomePage;
