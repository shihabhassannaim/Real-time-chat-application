import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainContainer() {
  return (
    <div className="flex w-[94vw] h-[90vh] bg-white rounded-lg">
      <Sidebar />
      <Outlet />
      {/* <ChatArea />
      <WelcomePage /> 
      <CreateGroup />
      <Users_Groups /> */}
    </div>
  );
}

export default MainContainer;
