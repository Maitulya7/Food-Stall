import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
const Bills = () => {
  return (
    <div>
      <div className=" h-screen  bg-green-50">
        <div className="flex ">
          <div className="w-64">
            <LeftNavbar />
          </div>
          <div className="flex w-full">
            <TopNavbar pageTitle="Bills" pageEmoji="💸" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
