import React from "react";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import AddCategory from "@/app/components/addCategory";
import CategoryList from "@/app/components/categoryList";

const Category = () => {
  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-52">
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Category" pageEmoji="🍔" />

        <div className="flex-grow bg-green-100 pl-5 ">
          <div className="pl-5">
          <AddCategory />
          </div>
     
          <div className="w-1/2">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
