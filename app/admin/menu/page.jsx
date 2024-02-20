"use client"
import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import AdminMenuCard from "@/app/components/VendorMenu/VendorMenu";
const Menu = () => {



  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
       
        <div className="flex-grow bg-green-100 p-2">
          <AdminMenuCard/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
