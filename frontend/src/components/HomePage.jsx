import React from "react";
import MessageContainer from "./MessageContainer";
import Sidebar from "./Sidebar";

export const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default HomePage;
