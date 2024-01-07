import React from "react";
import { useNavigate } from "react-router-dom";

function Conversation({ props }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-24 items-center bg-slate-200 hover:bg-slate-500 hover:duration-10002 m-2 p-3 rounded-lg"
      onClick={() => {
        navigate("chat");
      }}
    >
      <div className="mr-3 rounded-full bg-orange-500">
        <p>{props.name[0]}</p>
      </div>
      <div className="w-full">
        <p className="text-2xl mb-3 font-semibold">{props.name}</p>
        <div className="flex w-full">
          <p className="w-10/12 text-lg font-semibold">{props.lastMessage}</p>
          <p className="text-base">{props.timeStamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
