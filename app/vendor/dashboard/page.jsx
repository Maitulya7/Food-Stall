import LeftNavbar from "@/app/components/VendorComponents/Navbar/LeftNavbarVendor";
import CustomerItemTable from "@/app/components/customerOrders/orderTable";


import React from "react";

function Dashboard() {
  
  return (
    <div className="h-screen flex bg-green-100">
      <div >
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        
        <div className="flex-grow bg-green-100 pl-10 pr-10">
          <CustomerItemTable/>
        </div>
      </div>
  
    </div>
  );
}

export default Dashboard;
