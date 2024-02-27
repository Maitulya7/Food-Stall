"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import DropDownRequest from "../request/DropDownRequest";
import { FaHome, FaThList } from 'react-icons/fa';


const LeftNavbarSuperAdmin = () => {

  const [isMenuOpen, setMenuOpen] = useState(true);


  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();


  const buttonStyles = {
    color: "white",
    outline: "none",
    transform: `rotate(${isMenuOpen ? "180deg" : "0deg"})`,
    transition: "transform 0.3s ease",
  };

  const linkStyles = (path) => ({
    color: pathname.startsWith(path) ? "blue" : "white",
    backgroundColor: pathname.startsWith(path) ? "black" : "transparent",
    textDecoration: "none",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  });

  return (
    <div className="bg-[#393e46] h-full">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleMenu}
            style={buttonStyles}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

        </div>
      </div>

      <div
  className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex-col gap-4 px-4`}
>
  <div className="mt-6 flex gap-4 flex-col px-4 py-2">
    <div className="flex items-center"style={linkStyles("/super-admin/dashboard")} >
      <FaHome className="text-white" />
      <a href="/super-admin/dashboard"  className="ml-4 text-white font-medium">Home</a>
    </div>
    <div className="flex items-center"style={linkStyles("/super-admin/category")} >
      <FaThList className="text-white" />
      <a href="/super-admin/category"  className="ml-4 text-white font-medium">Category</a>
    </div>
  </div>
  <div className="flex items-start pt-3 pl-2">
      <DropDownRequest /> 
    </div>
</div>

    </div>
  );
};

// Export the component
export default LeftNavbarSuperAdmin;
