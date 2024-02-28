"use client";
import React, { useState, useEffect } from "react";
import MenuTable from "./MenuTable";
import DEFAULT_URL from "@/config";
import axios from "axios";
import AddMenuItemForm from "./AddMenuItemForm";

const AdminMenuCard = () => {
  const [isFormOpen, setFormOpen] = useState(false)
  const [apiData, setApiData] = useState([]);

  const fetchApiData = () => {
    try {
      axios
        .get(`${DEFAULT_URL}/api/v1/vendor/food_items`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        })
        .then((res) => {
          console.log("Fetched data successfully:", res.data);
          setApiData(res.data);
          setFormOpen(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };



  useEffect(() => {
    if (!isFormOpen) {
      fetchApiData();
    }
  }, [isFormOpen]);



  useEffect(() => {
    console.log("isFormOpen value after setFormOpen:", isFormOpen);
  }, [isFormOpen]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Items</h2>
        <div className="flex w-1/3 gap-5">
          <button
            onClick={() => {
              console.log("Add Item button clicked");
              setFormOpen(true);
            }}
            className="bg-blue-500 text-white w-full h-10 font-medium rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
      </div>
      <MenuTable menu={apiData} fetchApiData={fetchApiData} />
      {isFormOpen && (
        <AddMenuItemForm
        setFormOpen={setFormOpen}
        fetchApiData={fetchApiData}
      />
      )}
    </div>
  );
};

export default AdminMenuCard;


