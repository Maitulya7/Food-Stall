"use client"
import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { link } from "@nextui-org/react";
import RequestDropDown from "./RequestDropDown";

const LeftNavbarSuperAdmin = () => {
  const pathname = usePathname();


  return (
    <div className="bg-white w-full pt-1 h-screen rounded-xl">
      <div className="flex items-center ml-8 mt-5 mb-14">
        <Image src="/images/admin-logo.png" alt="logo" width={36} height={36} />
        <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
      </div>

      <div className="flex flex-col gap-10 pb-20">
        <MenuItem icon="/images/home.png" href="/super-admin/dashboard" active = {pathname.startsWith("/super-admin/dashboard")}>
          Home 
        </MenuItem>
        <MenuItem icon="/images/request.png" href="/super-admin/request" active = {pathname.startsWith("/super-admin/request")}>
          Request
        </MenuItem>
        <MenuItem icon="/images/menu.png" href="/super-admin/category" active = {pathname.startsWith("/super-admin/category")}>
          Category
        </MenuItem>
        <MenuItem icon="/images/settings.png" href="/super-admin/settings" active = {pathname.startsWith("/super-admin/setting")}>
          Setting
        </MenuItem>
      </div>
    </div>
  );
};

export default LeftNavbarSuperAdmin;
