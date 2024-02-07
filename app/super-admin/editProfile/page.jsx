import React from "react";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";

const EditProfile = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-64">
        <LeftNavbarSuperAdmin/>
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Edit Profile" pageEmoji="✏️" />
        <div className="flex-grow bg-green-100">hello</div>
      </div>
    </div>
  );
};

export default EditProfile;