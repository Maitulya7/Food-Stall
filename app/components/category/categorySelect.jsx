import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import DEFAULT_URL from "@/config";

export default function CategorySelect({ handleSelectionChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = () => {
    try {
      axios
        .get(`${DEFAULT_URL}/api/v1/admin/categories`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        })
        .then((res) => {
          const fetchedCategories = res.data.categories || [];
          setCategories(fetchedCategories);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  return (
    <div className="w-full">
      <Select
        label="Category"
        selectionMode="multiple"
        variant="bordered"
        placeholder="Select a category"
        onChange={handleSelectionChange}
      >
        {categories.map((category) => (
          <SelectItem key={category.name}>{category.name}</SelectItem>
        ))}
      </Select>
      
    </div>
  );
}
