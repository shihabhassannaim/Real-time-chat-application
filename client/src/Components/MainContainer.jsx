import React from "react";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";

function MainContainer() {
  return (
    <div className="flex w-[94vw] h-[90vh] bg-white rounded-lg">
      <Sidebar />
      <WorkArea />
    </div>
  );
}

export default MainContainer;
