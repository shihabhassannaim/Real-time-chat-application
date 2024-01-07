import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Conversation from "./Conversation";

function Sidebar() {
  const [conversation, setConversation] = useState([
    {
      name: "Conversation",
      lastMessage: "1st message",
      timeStamp: "today",
    },
    {
      name: "2",
      lastMessage: "2ndt message",
      timeStamp: "today",
    },
    {
      name: "3",
      lastMessage: "3rd message",
      timeStamp: "today",
    },

    {
      name: "4",
      lastMessage: "4th message",
      timeStamp: "today",
    },
  ]);
  const navigate = useNavigate();

  return (
    <div className="w-3/12 bg-gray-200 h-full flex rounded-3xl flex-col">
      <div className="flex m-3 bg-white rounded-2xl justify-around">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
        </div>
      </div>
      <div className="bg-white rounded-2xl m-3 flex items-center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          className="border-none ml-4 text-xl "
          placeholder="Search......"
        />
      </div>
      <div className="bg-white rounded-2xl m-3 flex flex-col flex-1">
        {conversation.map((con) => {
          return <Conversation props={con} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
