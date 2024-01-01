import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <div className="w-3/12 bg-gray-200 h-full flex rounded-3xl flex-col">
      <div className="flex m-3 bg-white rounded-2xl justify-around">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAltIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
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
      <div className="bg-white rounded-2xl m-3 h-screen flex items-center">
        list
      </div>
    </div>
  );
}

export default Sidebar;
