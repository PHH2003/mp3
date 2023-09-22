import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-main-300">
      <div className="w-full h-full flex auto">
        <div className="w-[240px] min-h-screen flex-none">
          <SidebarLeft />
        </div>
        <div className="flex-auto ">
          <Outlet />
        </div>
        <div className="w-[329px] hidden 1600:flex flex-none animate-slide-left bg-red-400">
          <SidebarRight />
        </div>
      </div>
      <div className="flex-none h-[90px]">
        <Player />
      </div>
    </div>
  );
};

export default Public;
