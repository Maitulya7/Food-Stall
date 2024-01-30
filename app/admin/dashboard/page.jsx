import LeftNavbar from "@/app/components/LeftNavbar";
import TopNavbar from "@/app/components/TopNavbar";

import React from "react";

function Dashboard() {
  return (
    <div className="h-screen flex bg-green-50">
    <div className="w-64">
      <LeftNavbar />
    </div>
    <div className="flex flex-col w-full">
      <TopNavbar pageTitle="Home" pageEmoji="🏠" />
      <div className="flex-grow bg-green-50">
        hello
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
