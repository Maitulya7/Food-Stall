"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Button,
} from "@nextui-org/react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";


import { Select, SelectItem } from "@nextui-org/react";

export const itemType = [
    {label:"Veg" , value:"veg"},
    {label:"Non-Veg" , value:"no-veg"},
]

export const itemSubType = [
    {label:"Regular" , value:"regular"},
    {label:"Swaminarayan" , value:"swaminarayan"},
    {label:"Jain" , value:"jain"},
]

export const tastes = [
  { label: "Spicy", value: "spicy" },
  { label: "Medium", value: "medium" },
  { label: "Light", value: "light" },
];

export const tags = [
  { label: "Best Seller", value: "best_seller" },
  { label: "Kids", value: "kids" },
  { label: "Starter", value: "starter" },
  { label: "Yummy", value: "yummy" },
  { label: "Healthy", value: "healthy" },
];

export const FoodCategory = [
  { label: "Chinese", value: "Chinese" },
  { label: "Punjabi", value: "Punjabi" },
  { label: "South Indian", value: "South Indian" },
];

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
  const [isSelectOpen, setSelectOpen] = useState(false);

  // Form state
  const [isFormOpen, setFormOpen] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    item_type: "",
    sub_type: "",
    taste: "",
    tags: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Adding item:", formInputs);
    setFormOpen(false);
  };

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
                items={FoodCategory}
                label="Food Category"
                className="w-full"
                variant="faded"
              >
                {(FoodCategory) => (
                  <SelectItem key={FoodCategory.value}>
                    {FoodCategory.label}
                  </SelectItem>
                )}
              </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
          <thead>
            <tr className="bg-green-800 text-white ">
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

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 w-1/2  rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
            <form className="space-y-4 " onSubmit={handleFormSubmit}>
              <Input
                label="Name"
                name="name"
                value={formInputs.name}
                onChange={handleInputChange}
                placeholder="Enter item name"
                className="w-full"
              />
            <div className="flex gap-5">
                <Select
                  items={itemType}
                  label="Item Type"
                  placeholder="Select item type"
                  className="max-w-xs"
                >
                  {(itemType) => (
                    <SelectItem key={itemType.value}>{itemType.label}</SelectItem>
                  )}
                </Select>

                <Select
                  items={itemSubType}
                  label="Sub Type"
                  placeholder="Select sub type"
                  className="max-w-xs"
                  selectionMode="multiple"
                >
                  {(itemSubType) => (
                    <SelectItem key={itemSubType.value}>{itemSubType.label}</SelectItem>
                  )}
                </Select>

              </div>
              <div className="flex gap-5">
                <Select
                  items={tastes}
                  label="Tastes"
                  placeholder="Select taste"
                  className="max-w-xs"
                >
                  {(animal) => (
                    <SelectItem key={animal.value}>{animal.label}</SelectItem>
                  )}
                </Select>

                <Select
                  items={tags}
                  label="Tastes"
                  placeholder="Select taste"
                  className="max-w-xs"
                  selectionMode="multiple"
                >
                  {(tags) => (
                    <SelectItem key={tags.value}>{tags.label}</SelectItem>
                  )}
                </Select>

                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={formInputs.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full"
                />
              </div>

              <Select
                items={FoodCategory}
                label="Food Category"
                placeholder="Select Food Category"
                className="w-full"
              >
                {(FoodCategory) => (
                  <SelectItem key={FoodCategory.value}>
                    {FoodCategory.label}
                  </SelectItem>
                )}
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
                  className="ml-2 bg-green-600 text-white font-medium"
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
