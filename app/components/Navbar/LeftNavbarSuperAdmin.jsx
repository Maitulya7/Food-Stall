import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const LeftNavbarSuperAdmin = () => {
  return (
    <div className="bg-white w-full pt-1 h-auto rounded-xl">
      <div className="flex items-center ml-8 mt-10 mb-14">
        <Image src="/images/admin-logo.png" alt="logo" width={36} height={36} />
        <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
      </div>

      <div className="flex flex-col gap-10 pb-20">
        <MenuItem icon="/images/home.png" href="/super-admin/dashboard">
          Home
        </MenuItem>
        <MenuItem icon="/images/request.png" href="/super-admin/request">
          Request
        </MenuItem>
        <MenuItem icon="/images/menu.png" href="/super-admin/category">
          Category
        </MenuItem>
        <MenuItem icon="/images/settings.png" href="/super-admin/settings">
          Setting
        </MenuItem>
        <MenuItem icon="/images/edit-profile.png" href="/super-admin/editProfile">
          Edit Profile
        </MenuItem>
      </div>
    </div>
  );
};

export default LeftNavbarSuperAdmin;
