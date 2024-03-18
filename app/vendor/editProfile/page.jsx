import React from "react";
import LeftNavbar from "@/app/components/VendorComponents/Navbar/LeftNavbarVendor";
const EditProfile = ({vendorData}) => {
  console.log(vendorData)
  return (
    <div className="h-screen flex bg-green-100">
      <div >
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow bg-green-100"></div>
      </div>
    </div>
  );
};

export default EditProfile;
