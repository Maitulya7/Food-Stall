import React from "react";
import LeftNavbar from "@/app/components/Navbar/LeftNavbar";

const Bills = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div>
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow bg-green-100">hello</div>
      </div>
    </div>
  );
};

export default Bills;
