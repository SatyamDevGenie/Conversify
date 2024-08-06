import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);

  const dispatch = useDispatch(); // dispatch action from redux store........

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 text-white font-semibold px-2 py-2 mb-2">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
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
      ) : (
        <h1>Let's start the conversation</h1>
      )}
    </>
  );
};

export default MessageContainer;
