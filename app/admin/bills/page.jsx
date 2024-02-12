import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
const Bills = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Bills" pageEmoji="💵" />
        <div className="flex-grow bg-green-100">hello</div>
      </div>
    </div>
  );
};

export default Bills;
