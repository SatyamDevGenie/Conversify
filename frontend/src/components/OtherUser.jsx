import React from "react";

const OtherUser = (props) => {
  const user = props.user;

  return (
    <div>
      <div>
        <div className="flex gap-2 items-center text-white hover:text-zinc-800 font-bold hover:bg-zinc-200 rounded-lg p-2 cursor-pointer">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.profilePhoto} alt="user-profile" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-3">
              <p>{user?.fullName}</p>
            </div>
          </div>
        </div>
        <div className="divider my-0 py-0"></div>
      </div>
    </div>
  );
};

export default OtherUser;
