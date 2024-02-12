"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";

const AdminMenuCard = () => {
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
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isSelectOpen, setSelectOpen] = useState(false); // New state for controlling the Select menu visibility

  const handleAddItem = () => {
    // Implement your logic for adding a new item
    console.log("Adding item");
  };

  const handleUpdateItem = () => {
    // Implement your logic for updating an existing item
    console.log("Updating item");
  };

  const handleDeleteItem = () => {
    // Implement your logic for deleting an existing item
    console.log("Deleting item");
  };

  const toggleSelectMenu = () => {
    setSelectOpen(!isSelectOpen);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Items</h2>
        <div className="flex gap-5">
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Item
          </button>
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={toggleSelectMenu} // Updated to toggle the Select menu
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {selectedMenu || "Select Menu"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <div
              className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                isSelectOpen ? "visible" : "hidden" // Toggle visibility based on state
              }`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  onClick={() => {
                    setSelectedMenu("Chinese Food Menu");
                    toggleSelectMenu(); // Close the menu after selecting an option
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Chinese Food Menu
                </button>
                <button
                  onClick={() => {
                    setSelectedMenu("Punjabi Food Menu");
                    toggleSelectMenu(); // Close the menu after selecting an option
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Punjabi Food Menu
                </button>
                {/* Add more menu options as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
          <thead>
            <tr className="bg-green-300 ">
              <th className="py-2 px-4 text-xs text-left border-b">Index</th>
              <th className="py-2 px-4 text-xs text-left border-b">Name</th>
              <th className="py-2 px-4 text-xs text-left border-b">
                Item Type
              </th>
              <th className="py-2 px-4 text-xs text-left border-b">Sub Type</th>
              <th className="py-2 px-4 text-xs text-left border-b">Taste</th>
              <th className="py-2 px-4 text-xs text-left border-b">Tags</th>
              <th className="py-2 px-4 text-xs text-left border-b">Price</th>
              <th className="py-2 px-4 text-xs text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.food_item.sub_type.map((subType, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{menu.food_item.name}</td>
                <td className="py-2 px-4 border-b">
                  {menu.food_item.item_type}
                </td>
                <td className="py-2 px-4 border-b">{subType}</td>
                <td className="py-2 px-4 border-b">
                  {/* Taste Popover */}
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
                        {menu.food_item.taste.map((tasteItem, index) => (
                          <div key={index} className="mb-2">
                            {tasteItem}
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
                <td className="py-2 px-4 border-b">
                  {/* Tags Popover */}
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
                        {menu.food_item.tags.map((tag, index) => (
                          <div key={index} className="mb-2">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
                <td className="py-2 px-4 border-b">{menu.food_item.price}</td>
                <td className="py-2 px-4 border-b">
                  {/* Actions Popover */}
                  <Popover trigger="click" placement="bottom">
                    <PopoverTrigger>
                      <div className="flex items-center cursor-pointer text-blue-500 hover:text-blue-700">
                        <FaEllipsisV />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white border rounded-md p-2 shadow-md">
                      <div className="space-y-2">
                        <button className="w-full flex items-center py-2 px-4 hover:bg-gray-100 transition-colors">
                          <FaPencilAlt className="mr-2 text-green-500" />
                          Edit
                        </button>
                        <button className="w-full flex items-center py-2 px-4 hover:bg-gray-100 transition-colors">
                          <FaTrash className="mr-2 text-red-500" />
                          Delete
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMenuCard;
