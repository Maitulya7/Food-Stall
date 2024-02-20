"use client";
import React, { useState, useEffect } from "react";
import { FaEllipsisV, FaPencilAlt, FaTrash, FaTimes } from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import DEFAULT_URL from "@/config";

const MenuItem = ({
  index,
  id,
  name,
  itemType,
  subType,
  taste,
  tags,
  price,
  onDelete,
  fetchApiData,
}) => {
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

  const [foodCategoryData, setFoodCategoryData] = useState([]);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    name,
    itemType,
    subType,
    taste,
    tags,
    price,
  });

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

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

const handleEditInputChange = (name, value) => {
  setEditedData((prevData) => {
    if (name === "name" || name === "price") {
      return {
        ...prevData,
        [name]: value,
      };
    } else {
      return {
        ...prevData,
        [name]: Array.isArray(value) ? value : [value],
      };
    }
  });
};

  
  
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${DEFAULT_URL}/api/v1/vendor/food_items/${id}`,
        editedData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        }
      );

      closeEditForm();
      fetchApiData();
    } catch (error) {
      console.error("Error updating item:", error.message);
    }
  };

  const handleDelete = (id) => {
    try {
       axios.delete(`${DEFAULT_URL}/api/v1/vendor/food_items/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access-token"),
          "ngrok-skip-browser-warning": true,
        },
      });
      onDelete();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-100 transition-colors">
        <td className="py-2 px-4 border-b">{index + 1}</td>
        <td className="py-2 px-4 border-b">{name}</td>
        <td className="py-2 px-4 border-b">{itemType}</td>
        <td className="py-2 px-4 border-b">
          <Popover trigger="hover" placement="bottom">
            <PopoverTrigger>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-orange-600 font-medium text-white text-xs rounded-md cursor-pointer transition duration-300">
                  SubType
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-2">
                {subType.map((subTypeItem, index) => (
                  <div key={index} className="mb-2">
                    {subTypeItem}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </td>
        <td className="py-2 px-4 border-b">
          <Popover trigger="hover" placement="bottom">
            <PopoverTrigger>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md cursor-pointer transition duration-300">
                  Taste
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-2">
                {taste.map((tasteItem, index) => (
                  <div key={index} className="mb-2">
                    {tasteItem}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </td>
        <td className="py-2 px-4 border-b">
          <Popover trigger="hover" placement="bottom">
            <PopoverTrigger>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-md cursor-pointer transition duration-300">
                  Tags
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-2">
                {tags.map((tag, index) => (
                  <div key={index} className="mb-2">
                    {tag}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </td>
        <td className="py-2 px-4 border-b">{price}</td>
        <td className="py-2 px-4 border-b">
          <Popover trigger="click" placement="bottom">
            <PopoverTrigger>
              <div className="flex items-center cursor-pointer text-blue-500 hover:text-blue-700">
                <FaEllipsisV />
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-white border rounded-md p-4 shadow-md space-y-4">
              <button
                className="w-full flex items-center justify-center py-3 px-6 font-medium bg-red-600 text-white hover:bg-red-700 transition-colors rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleDelete}
              >
                <FaTrash className="mr-2 " />
                Delete Item
              </button>

              <button
                className="w-full flex items-center justify-center py-3 px-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onClick={openEditForm}
              >
                <FaPencilAlt className="mr-2" />
                Edit Item
              </button>
            </PopoverContent>
          </Popover>
        </td>
      </tr>

      {isEditFormOpen && (
        <tr className="bg-gray-100 transition-colors">
          <td colSpan="8" className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <form
                className="p-6 max-w-md bg-white shadow-md rounded-md"
                onSubmit={handleEditFormSubmit}
              >
              
                <Input
                  label="Name"
                  name="name"
                  value={editedData.name}
                  onChange={(e) =>
                    handleEditInputChange("name", e.target.value)
                  }
                  placeholder="Enter item name"
                  className="w-full mb-4"
                />

               
                <div className="flex gap-4">
                  <Select
                    items={itemTypeOptions}
                    label="Type"
                    placeholder="Select type"
                    className="max-w-xs"
                    value={editedData.itemType}
                    onChange={(selectedOption) =>
                      handleEditInputChange(
                        "itemType",
                        selectedOption.target.value
                      )
                    }
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
                    value={editedData.subType}
                    onChange={(selectedOption) =>
                      handleEditInputChange(
                        "subType",
                        selectedOption.target.value.split(",")
                      )
                    }
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

               
                <div className="flex gap-4 mt-4 mb-4">
                  <Select
                    items={tasteOptions}
                    label="Tastes"
                    placeholder="Select tastes"
                    className="max-w-xs"
                    selectionMode="multiple"
                    value={editedData.taste}
                    onChange={(selectedOption) =>
                      handleEditInputChange(
                        "taste",
                        selectedOption.target.value.split(",")
                      )
                    }
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
                    value={editedData.tags}
                    onChange={(selectedOption) =>
                      handleEditInputChange(
                        "tags",
                        selectedOption.target.value.split(",")
                      )
                    }
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
                    value={editedData.price}
                    onChange={(e) =>
                      handleEditInputChange("price", e.target.value)
                    }
                    placeholder="Enter price"
                    className="w-full"
                  />
                </div>

              
              
                <Select
                  items={foodCategoryData}
                  label="Food Category"
                  placeholder="Select Food Category"
                  className="w-full mb-4"
                  value={editedData.food_category}
                  onChange={(selectedOption) =>
                    handleEditInputChange(
                      "food_category",
                      selectedOption.target.value
                    )
                  }
                >
                  {foodCategoryData.map((foodCategory) => (
                    <SelectItem key={foodCategory.id} value={foodCategory.name}>
                      {foodCategory.name}
                    </SelectItem>
                  ))}
                </Select>

               
                <div className="flex justify-end mt-4">
                  <Button
                    type="button"
                    onClick={closeEditForm}
                    variant="text"
                    color="error"
                  >
                   
                    Cancel
                  </Button>
                  <Button
                  type="submit"
                  className="ml-2 bg-green-800 text-white font-medium"
                  auto
                >
                    Edit Item
                  </Button>
                </div>
              </form>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default MenuItem;
