import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";

const FoodOrder = () => {
  return (
    <div>
      <div className=" h-screen  bg-green-50">
        <div className="flex ">
          <div className="w-64">
            <LeftNavbar />
          </div>
          <div className="flex w-full">
            <TopNavbar pageTitle="Food Order" pageEmoji=" 🍔" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
