"use client"
import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

const LeftNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white w-62 pt-1 h-screen rounded-xl">
      <div className="flex items-center ml-8 mt-10 gap-2 mb-14">
        <Image src="/images/admin-logo.png" alt="logo" width={32} height={32} />
        <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
      </div>

      <div className="flex flex-col gap-10 pb-20">
        <MenuItem icon="/images/home.png" href="/admin/dashboard" active = {pathname.startsWith("/admin/dashboard")}>
          Home
        </MenuItem>
        <MenuItem icon="/images/food-order.png" href="/admin/foodOrder" active = {pathname.startsWith("/admin/foodOrder")}>
          Food Order
        </MenuItem>
        <MenuItem icon="/images/menu.png" href="/admin/menu" active = {pathname.startsWith("/admin/menu")}>
          Menu
        </MenuItem>
        <MenuItem icon="/images/bills.png" href="/admin/bills" active = {pathname.startsWith("/admin/bills")}>
          Bills
        </MenuItem>
        <MenuItem icon="/images/settings.png" href="/admin/setting" active = {pathname.startsWith("/admin/setting")}>
          Setting
        </MenuItem>
        <MenuItem icon="/images/edit-profile.png" href="/admin/editProfile" active = {pathname.startsWith("/admin/editProfile")}>
          Edit Profile
        </MenuItem>
      </div>
    </div>
  );
};

export default LeftNavbar;
