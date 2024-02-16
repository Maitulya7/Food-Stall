"use client"
import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import AdminMenuCard from "@/app/components/VendorMenu/VendorMenu";
const Menu = () => {

  return (
    <div className="h-full flex bg-green-100">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Menu" pageEmoji="🍽️" />
        <div className="flex-grow bg-green-100 p-2">
          <AdminMenuCard/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
