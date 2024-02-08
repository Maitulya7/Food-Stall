import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";

export default function CategorySelect({ handleSelectionChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "https://food-court-api.as.r.appspot.com/api/v1/admin/categories",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        }
      );

      const fetchedCategories = response.data.categories || [];
      setCategories(fetchedCategories);
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
          <SelectItem key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
