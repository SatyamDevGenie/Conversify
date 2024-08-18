import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch(); // dispatch action from redux store........

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  // useEffect(() => {
  //   return () => dispatch(setSelectedUser(null));
  // }, []);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 text-white font-semibold px-2 py-2 mb-2">
            <div className={`avatar ${isOnline ? "online" : ""}`}>
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
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-bold">
            {authUser?.fullName}
          </h1>
          <h1 className="text-2xl text-white font-semibold">
            Let's start conversation
          </h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
