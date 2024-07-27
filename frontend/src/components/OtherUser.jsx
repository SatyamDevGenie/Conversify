import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center hover:bg-zinc-200 rounded-lg p-2 cursor-pointer">
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
              <p className="text-black font-extrabold">Satyam Sawant</p>
            </div>
          </div>
        </div>
        <div className="divider my-0 py-0"></div>
      </div>
    </div>
  );
};

export default OtherUser;
