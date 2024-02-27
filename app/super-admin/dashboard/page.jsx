import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
function Dashboard() {

  return (
    <div className="h-screen flex bg-green-100">
      <div>
        <LeftNavbarSuperAdmin/>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow bg-green-100 pl-10 pr-10">
         home
        </div>
      </div>
   
    </div>
  );
}

export default Dashboard;
