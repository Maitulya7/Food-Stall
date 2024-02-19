"use client";
import React from "react";
import { useEffect } from "react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
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
  console.log("MenuItem received data:", {
    index,
    id,
    name,
    itemType,
    subType,
    taste,
    tags,
    price,
  });
  const handleDelete = () => {
    try {
      axios
        .delete(`${DEFAULT_URL}/api/v1/vendor/food_items/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        })
        .then((res) => {
          console.log(res.message);
          fetchApiData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  // const handleUpdate = () => {
  //   try {
  //     axios
  //       .put(`${DEFAULT_URL}/api/v1/vendor/food_items/${id}`, {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("access-token"),
  //           "ngrok-skip-browser-warning": true,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.message);
  //         fetchApiData();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.error("Error deleting item:", error.message);
  //   }
  // };


  const deleteItemAndRefresh = () => {
    handleDelete();
    onDelete(id);
    fetchApiData();
  };

  return (
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
              onClick={deleteItemAndRefresh}
            >
              <FaTrash className="mr-2 " />
              Delete Item
            </button>

            <button
              className="w-full flex items-center justify-center py-3 px-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md focus:outline-none focus:ring focus:border-blue-300"
            
            >
              <FaPencilAlt className="mr-2" />
              Edit Item
            </button>
          </PopoverContent>
        </Popover>
      </td>
    </tr>
  );
};

export default MenuItem;
