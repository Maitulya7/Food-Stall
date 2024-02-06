import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LatestOrders from "@/app/components/LatestOrders";
import React from "react";

function Dashboard() {
  return (
    <div className=" h-screen  bg-green-50">
      <div className="flex ">
        <div className="w-64">
          <LeftNavbar />
        </div>
        <div className="flex-col w-full">
          <TopNavbar pageTitle="Home" pageEmoji="🏠" />
          <LatestOrders />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
