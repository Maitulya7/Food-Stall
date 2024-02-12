"use client"
import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import DropDownRequest from "../request/DropDownRequest";

const LeftNavbarSuperAdmin = () => {
  const pathname = usePathname();


  return (
    <div className="bg-green-800 w-62 pt-1 h-full ">
      <div className="flex items-center ml-8 mt-5 mb-14 gap-2">
        <Image src="/images/admin-logo.png" alt="logo" width={32} height={32} />
        <h1 className="text-2xl font-semibold text-white">FoodM</h1>
      </div>

      <div className="flex flex-col gap-4 pl-10 pr-10">
        <MenuItem icon="/images/home.png" href="/super-admin/dashboard" active = {pathname.startsWith("/super-admin/dashboard")}>
          Home 
        </MenuItem>
       
        <MenuItem icon="/images/menu.png" href="/super-admin/category" active = {pathname.startsWith("/super-admin/category")}>
          Category
        </MenuItem>
        <MenuItem icon="/images/settings.png" href="/super-admin/settings" active = {pathname.startsWith("/super-admin/setting")}>
          Setting
        </MenuItem>
          <div className="pr-10">

        <DropDownRequest/>
          </div>
      </div>
     
    </div>
  );
};

export default LeftNavbarSuperAdmin;
