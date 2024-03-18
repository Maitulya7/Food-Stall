"use client";
import React, { useEffect, useState } from "react";
import LeftNavbarSuperAdmin from "@/app/components/AdminComponents/Navbar/LeftNavbarAdmin";
import AddCategory from "@/app/components/addCategory";
import CategoryList from "@/app/components/categoryList";
import axios from "axios";
import DEFAULT_URL from "@/config";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '@/public/images/no-data-animation.json'

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${DEFAULT_URL}/api/v1/admin/categories`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access-token"),
          "ngrok-skip-browser-warning": true,
        },
      });

      const categories = response.data.categories || [];
      setCategoryData(categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen  flex bg-white">
      <div>
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full">
        <div className=" px-10 pb-4 pt-20">
          <AddCategory fetchData={fetchData} />
        </div>
        {loading ? (
        <div className="flex items-center justify-center  h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce" style={{ animationDelay: ".7s" }}></div>
            <div className="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce" style={{ animationDelay: ".3s" }}></div>
            <div className="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce" style={{ animationDelay: ".7s" }}></div>
          </div>
        </div>
      ) : categoryData && categoryData.length > 0 ? (

        
        <div className="flex-grow  px-4">
          <CategoryList categoryData={categoryData} fetchData={fetchData} />
        </div>
      ) : (
        <div className="flex items-center justify-center  h-screen">
         <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-1/3 h-1/2"
          />
        </div>
      )}
      </div>
    </div>
  );
};

export default Category;
