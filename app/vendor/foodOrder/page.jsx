import React from "react";
import LeftNavbar from "@/app/components/VendorComponents/Navbar/LeftNavbarVendor";
import CustomerItemTable from "@/app/components/customerOrders/orderTable";

const FoodOrder = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div>
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow bg-green-100 pl-12 pr-12">
          <CustomerItemTable/>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
