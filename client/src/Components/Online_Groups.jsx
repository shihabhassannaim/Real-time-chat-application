import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";

function Online_Groups() {
  return (
    <div className="w-full ml-5 bg-gray-200 h-full flex rounded-3xl flex-col">
      <div className="flex m-3 bg-white rounded-2xl p-5 text-xl font-semibold">
        <img src="" alt="" />
        <p>Online Groups</p>
      </div>
      <div className="bg-white rounded-2xl m-3 flex items-center">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input
          type="text"
          placeholder="Search......"
          className="border-none ml-4 text-xl"
        />
      </div>
      <div>
        <div className="bg-white rounded-2xl m-3 flex flex-col flex-1">
          <p>!st Groups</p>
          <p>Test Groups 1</p>
        </div>
        <div className="bg-white rounded-2xl m-3 flex flex-col flex-1">
          <p>T</p>
          <p>Test Groups 2</p>
        </div>
      </div>
    </div>
  );
}

export default Online_Groups;
