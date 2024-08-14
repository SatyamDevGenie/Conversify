import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.message);

  const disatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      disatch(setMessages([...messages, newMessage]));
    });
  }, []);
};

export default useGetRealTimeMessage;
