import React from "react";
import LeftNavbar from "@/app/components/LeftNavbar";
import TopNavbar from "@/app/components/TopNavbar";
const Setting = () => {
  return (
    <div>
      <div className=" h-screen  bg-green-50">
        <div className="flex ">
          <div className="w-64">
            <LeftNavbar />
          </div>
          <div className="flex w-full">
            <TopNavbar pageTitle="Setting" pageEmoji=" ⚙️" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
