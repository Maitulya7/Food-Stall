import LeftNavbar from "@/app/components/LeftNavbar";
import TopNavbar from "@/app/components/TopNavbar";

import React from "react";

function Dashboard() {
  return (
    <div className=" h-screen  bg-green-50">
      <div className="flex ">
        <div className="w-64">
          <LeftNavbar />
        </div>
        <div className="flex w-full">
          <TopNavbar pageTitle="Home" pageEmoji="🏠" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
