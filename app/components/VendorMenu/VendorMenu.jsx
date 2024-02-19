"use client";
import React, { useState, useEffect } from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import MenuTable from "./MenuTable";
import DEFAULT_URL from "@/config";
import axios from "axios";

const AdminMenuCard = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const itemTypeOptions = [
    { label: "Veg", value: "veg" },
    { label: "Non-Veg", value: "no-veg" },
  ];

  const itemSubTypeOptions = [
    { label: "Regular", value: "regular" },
    { label: "Swaminarayan", value: "swaminarayan" },
    { label: "Jain", value: "jain" },
  ];

  const tasteOptions = [
    { label: "Spicy", value: "spicy" },
    { label: "Medium", value: "medium" },
    { label: "Light", value: "light" },
  ];

  const tagOptions = [
    { label: "Best Seller", value: "best_seller" },
    { label: "Kids", value: "kids" },
    { label: "Starter", value: "starter" },
    { label: "Yummy", value: "yummy" },
    { label: "Healthy", value: "healthy" },
  ];

  const initialMenu = {
    food_item: {
      name: "Tacos",
      item_type: "Veg",
      sub_type: ["jain", "swaminarayan", "regular"],
      taste: ["spicy", "medium", "light"],
      tags: ["best_seller", "kids", "starter", "yummy", "healthy"],
      price: 100,
    },
  };

  const [menu, setMenu] = useState(initialMenu);

  const [formInputs, setFormInputs] = useState({
    name: "",
    item_type: [],
    sub_type: [],
    taste: [],
    tags: [],
    price: "",
    food_category: "",
  });

  const handleInputChange = (name, value) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const categoryId = Number(formInputs.food_category);

    const newItemData = {
      name: formInputs.name,
      item_type: formInputs.item_type,
      sub_type: formInputs.sub_type,
      taste: formInputs.taste,
      tags: formInputs.tags,
      price: formInputs.price,
      food_category: categoryId,
    };

    try {
      console.log("Submitting form with data:", newItemData);
      axios
        .post(
          `${DEFAULT_URL}/api/v1/vendor/food_items?category_id=${categoryId}`,
          newItemData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
              "ngrok-skip-browser-warning": true,
            },
          }
        )
        .then((res) => {
          console.log("Item added successfully");
          fetchApiData();
          setFormOpen(false);
          console.log(res);
        });
    } catch (error) {
      console.error("Error adding item:", error.message);
    }
  };

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

  const [foodCategoryData, setFoodCategoryData] = useState([]);

  useEffect(() => {
    const storedFoodCategoryData = localStorage.getItem("categoriesData");
    if (storedFoodCategoryData) {
      try {
        const parsedData = JSON.parse(storedFoodCategoryData);
        setFoodCategoryData(parsedData);
      } catch (error) {
        console.error("Error parsing stored data:", error.message);
      }
    } else {
      console.error("No data found in localStorage for categoriesData");
    }
  }, []);

  const handleFoodCategoryChange = (event) => {
    const selectedCategoryId = event.target.value || "";
    console.log("Selected Category ID:", selectedCategoryId);

    setFormInputs((prevInputs) => ({
      ...prevInputs,
      food_category: selectedCategoryId,
    }));
  };

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
            className="bg-blue-500 text-white w-1/2 font-medium rounded hover:bg-blue-600"
          >
            Add Item
          </button>

          <Select
            items={foodCategoryData}
            label="Food Category"
            placeholder="Select Food Category"
            className="w-full"
            value={formInputs.food_category}
            onChange={handleFoodCategoryChange}
          >
            {foodCategoryData.map((foodCategory) => (
              <SelectItem key={foodCategory.id} value={foodCategory.id}>
                {foodCategory.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <MenuTable menu={apiData} fetchApiData={fetchApiData} />
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 w-1/2 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
            <form className="space-y-4 " onSubmit={handleFormSubmit}>
              <Input
                label="Name"
                name="name"
                value={formInputs.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter item name"
                className="w-full"
              />
              <div className="flex gap-5">
                <Select
                  items={itemTypeOptions}
                  label="Type"
                  placeholder="Select type"
                  className="max-w-xs"
                  onChange={(selectedOption) => {
                    const selectedType = selectedOption.target.value;
                    handleInputChange("item_type", selectedType);
                  }}
                >
                  {itemTypeOptions.map((itemType) => (
                    <SelectItem key={itemType.value} value={itemType.value}>
                      {itemType.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  items={itemSubTypeOptions}
                  label="Sub Type"
                  placeholder="Select sub types"
                  className="max-w-xs"
                  selectionMode="multiple"
                  onChange={(selectedOption) => {
                    const selectedSubTypes = selectedOption.target.value
                      .split(",")
                      .map((subType) => subType.trim())
                      .filter((subType) => subType !== "");

                    const updatedSubTypes = Array.from(
                      new Set([
                        ...(formInputs.sub_type || []),
                        ...selectedSubTypes,
                      ])
                    );

                    handleInputChange("sub_type", updatedSubTypes);
                  }}
                >
                  {itemSubTypeOptions.map((itemSubType) => (
                    <SelectItem
                      key={itemSubType.value}
                      value={itemSubType.value}
                    >
                      {itemSubType.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex gap-5">
                <Select
                  items={tasteOptions}
                  label="Tastes"
                  placeholder="Select tastes"
                  className="max-w-xs"
                  selectionMode="multiple"
                  onChange={(selectedOption) => {
                    const selectedTastes = selectedOption.target.value
                      .split(",")
                      .map((taste) => taste.trim())
                      .filter((taste) => taste !== "");

                    const updatedTastes = Array.from(
                      new Set([...(formInputs.taste || []), ...selectedTastes])
                    );

                    handleInputChange("taste", updatedTastes);
                  }}
                >
                  {tasteOptions.map((taste) => (
                    <SelectItem key={taste.value} value={taste.value}>
                      {taste.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  items={tagOptions}
                  label="Tags"
                  placeholder="Select tags"
                  className="max-w-xs"
                  selectionMode="multiple"
                  onChange={(selectedOption) => {
                    const selectedTags = selectedOption.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter((tag) => tag !== "");

                    const updatedTags = Array.from(
                      new Set([...(formInputs.tags || []), ...selectedTags])
                    );

                    handleInputChange("tags", updatedTags);
                  }}
                >
                  {tagOptions.map((tag) => (
                    <SelectItem key={tag.value} value={tag.value}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={formInputs.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="Enter price"
                  className="w-full"
                />
              </div>
              <Select
                items={foodCategoryData}
                label="Food Category"
                placeholder="Select Food Category"
                className="w-full"
                value={formInputs.food_category}
                onChange={handleFoodCategoryChange}
              >
                {foodCategoryData.map((foodCategory) => (
                  <SelectItem key={foodCategory.id} value={foodCategory.name}>
                    {foodCategory.name}
                  </SelectItem>
                ))}
              </Select>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  variant="text"
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  className="ml-2 bg-green-800 text-white font-medium"
                  auto
                >
                  Add Item
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenuCard;
