"use client";
import React, { useEffect, useState } from "react";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import AddCategory from "@/app/components/addCategory";
import CategoryList from "@/app/components/categoryList";
import axios from "axios";
import DEFAULT_URL from "@/config";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const fetchData = () => {
    try {
     
      axios
        .get(`${DEFAULT_URL}/api/v1/admin/categories`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        })
        .then((response) => {
          console.log(response.data);
          const categories = response.data.categories || [];
          console.log(categories);
          setCategoryData(categories);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex bg-green-100">
      <div>
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Category" pageEmoji="🍔" />

        <div className="flex-grow bg-green-100 pl-5 pr-5">
          <div>
            <div className="pl-5">
              <AddCategory fetchData={fetchData} />
            </div>
            <div>
              <CategoryList categoryData={categoryData} fetchData={fetchData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
