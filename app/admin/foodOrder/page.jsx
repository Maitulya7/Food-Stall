import React from "react";
import LeftNavbar from "@/app/components/LeftNavbar";
import TopNavbar from "@/app/components/TopNavbar";
import FoodTableList from "@/app/components/TableFood";

const FoodOrder = () => {
  return (
    <div className="h-screen flex bg-green-50">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Food Order" pageEmoji=" 🍔" />
        <div className="flex-grow bg-green-50 pl-12 pr-12">
          <FoodTableList/>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
