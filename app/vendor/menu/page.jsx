import React from "react";
import LeftNavbar from "@/app/components/VendorComponents/Navbar/LeftNavbarVendor";
import AdminMenuCard from "@/app/components/VendorMenu/VendorMenu";
const Menu = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div>
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
