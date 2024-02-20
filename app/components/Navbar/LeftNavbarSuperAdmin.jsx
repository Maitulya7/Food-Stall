"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import DropDownRequest from "../request/DropDownRequest";

const LeftNavbarSuperAdmin = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-green-800 w-full pt-1 h-full">
      {/* Responsive Hamburger Menu */}
      <div className="lg:hidden flex items-center justify-between px-4">
        <button
          onClick={handleToggleMenu}
          className="text-white focus:outline-none"
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

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:flex-col gap-4 pl-10 pr-10`}
      >
        <div className="lg:flex hidden lg:mt-5  items-center  mb-4 gap-2">
          <Image
            src="/images/admin-logo.png"
            alt="logo"
            width={32}
            height={32}
            className="lg:w-8 lg:h-8" // Make the image smaller on smaller screens
          />
          <h1 className="text-xl lg:text-2xl font-semibold text-white">
            FoodM
          </h1>
        </div>
        <div className="lg:mt-0 mt-10 flex gap-4 flex-col">
          <MenuItem
            icon="/images/home.png"
            href="/super-admin/dashboard"
            active={pathname.startsWith("/super-admin/dashboard")}
          >
            Home
          </MenuItem>
          <MenuItem
            icon="/images/menu.png"
            href="/super-admin/category"
            active={pathname.startsWith("/super-admin/category")}
          >
            Category
          </MenuItem>
          <div className="pr-10 pt-4">
            <DropDownRequest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbarSuperAdmin;
