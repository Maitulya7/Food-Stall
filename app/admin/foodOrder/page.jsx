import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import FoodTableList from "@/app/components/TableFood";
import CustomerItemTable from "@/app/components/customerOrders/orderTable";

const FoodOrder = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Food Order" pageEmoji=" 🍔" />
        <div className="flex-grow bg-green-100 pl-12 pr-12">
          <CustomerItemTable/>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
