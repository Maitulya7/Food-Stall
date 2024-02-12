import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LatestOrder from "@/app/components/Order/LatestOrder";

import React from "react";

function Dashboard() {
  return (
    <div className="h-screen flex bg-green-100">
      <div>
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Home" pageEmoji="🏠" />
        <div className="flex-grow bg-green-100 pl-10 pr-10">
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
