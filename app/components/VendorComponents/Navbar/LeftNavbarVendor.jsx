"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaThList } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoFastFood } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBill1 } from "react-icons/fa6";


const LeftNavbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(true);

  const router = useRouter();
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  const handleLogout = () => {

    localStorage.removeItem("access-token");
    router.push("/vendor");
  };


  const buttonStyles = {
    color: "white",
    outline: "none",
    transform: `rotate(${isMenuOpen ? "180deg" : "0deg"})`,
    transition: "transform 0.3s ease",
  };

  const linkStyles = (path) => ({
    color: pathname.startsWith(path) ? "blue" : "white",
    backgroundColor: pathname.startsWith(path) ? "#12372A" : "transparent",
    textDecoration: "none",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  });

  return (
    <div className="bg-[#436850] h-screen">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button onClick={handleToggleMenu} style={buttonStyles}>
            <svg
              className="w-6 h-6 text-[#FBFADA]"
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

      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex-col gap-4 px-6`}>
        <div className="mt-6 flex gap-4 flex-col px-4 py-2">
          <div className="flex items-center" style={linkStyles("/vendor/dashboard")}>
            <FaHome className="text-[#FBFADA]" />
            <Link href="/vendor/dashboard" className="ml-4 text-[#FBFADA] font-medium">
              Home
            </Link>
          </div>
          <div className="flex items-center" style={linkStyles("/vendor/foodOrder")}>
            <IoFastFood className="text-[#FBFADA]" />
            <Link href="/vendor/foodOrder" className="ml-4 text-sm text-[#FBFADA] font-medium">
             Orders
            </Link>
          </div>
          <div className="flex items-center" style={linkStyles("/vendor/menu")}>
            <BiSolidFoodMenu className="text-[#FBFADA]" />
            <Link href="/vendor/menu" className="ml-4 text-[#FBFADA] font-medium">
              Menu
            </Link>
          </div>
          <div className="flex items-center" style={linkStyles("/vendor/bills")}>
            <FaMoneyBill1 className="text-[#FBFADA]" />
            <Link href="/vendor/bills" className="ml-4 text-[#FBFADA] font-medium">
              Bill
            </Link>
          </div>
          <div className="flex items-center" style={linkStyles("/vendor/editProfile")}>
            <CgProfile className="text-[#FBFADA]" />
            <Link href="/vendor/editProfile" className="ml-4 text-[#FBFADA] font-medium">
              Profile
            </Link>
          </div>
        </div>


        <div className="w-full flex items-center justify-center mt-52" style={linkStyles("/super-admin/logout")}>
          <button onClick={handleLogout}
            class="group flex items-center justify-start w-11 h-11 bg-red-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
          >
            <div
              class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
              <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                ></path>
              </svg>
            </div>
            <div
              class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              Logout
            </div>
          </button>

        </div>
      </div>
    </div>
  );

};


export default LeftNavbar;
