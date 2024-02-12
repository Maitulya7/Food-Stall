import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import AdminMenu from "@/app/components/menu/menu";
import AdminMenuCard from "@/app/components/menu/AdminMenu";
const Menu = () => {
  return (
    <div className="h-screen flex bg-green-50">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Menu" pageEmoji="🍽️" />
        <div className="flex-grow bg-green-50 p-2">
          <AdminMenuCard/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
