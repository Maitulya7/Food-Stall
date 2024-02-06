import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const LeftNavbar = () => {
  return (
    <div className="bg-white w-full pt-1 h-auto rounded-xl">
      <div className="flex items-center ml-8 mt-10 mb-14">
        <Image src="/images/admin-logo.png" alt="logo" width={36} height={36} />
        <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
      </div>

      <div className="flex flex-col gap-10 pb-20">
        <MenuItem icon="/images/home.png" href="/admin/dashboard">
          Home
        </MenuItem>
        <MenuItem icon="/images/food-order.png" href="/admin/foodOrder">
          Food Order
        </MenuItem>
        <MenuItem icon="/images/menu.png" href="/admin/menu">
          Menu
        </MenuItem>
        <MenuItem icon="/images/bills.png" href="/admin/bills">
          Bills
        </MenuItem>
        <MenuItem icon="/images/settings.png" href="/admin/setting">
          Setting
        </MenuItem>
        <MenuItem icon="/images/edit-profile.png" href="/admin/editProfile">
          Edit Profile
        </MenuItem>
      </div>
    </div>
  );
};

export default LeftNavbar;
