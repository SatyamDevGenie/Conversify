import React from "react";
import { useSelector } from "react-redux";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  useGetMessages();

  const { messages } = useSelector((store) => store.message);
  if (!messages) return;

  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
