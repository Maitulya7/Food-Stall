import LeftNavbarSuperAdmin from "@/app/components/AdminComponents/Navbar/LeftNavbarAdmin";
import React from "react";

function Dashboard() {

  return (
    <div className="h-screen flex bg-[#f0f5f9]">
      <div>
        <LeftNavbarSuperAdmin/>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow bg-[#f0f5f9] pl-10 pr-10">
         home
        </div>
      </div>
   
    </div>
  );
}

export default Dashboard;
