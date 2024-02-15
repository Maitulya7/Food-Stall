import React from "react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const MenuItem = ({ index, name, itemType, subType, taste, tags, price }) => {
  return (
    <tr className="hover:bg-gray-100 transition-colors">
      <td className="py-2 px-4 border-b">{index + 1}</td>
      <td className="py-2 px-4 border-b">{name}</td>
      <td className="py-2 px-4 border-b">{itemType}</td>
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
  );
};

export default MenuItem;
