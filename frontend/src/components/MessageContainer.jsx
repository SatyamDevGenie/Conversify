import React from "react";
import { useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);

  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex gap-2 items-center bg-zinc-800 text-white font-semibold px-2 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3 ">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
