"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";

const CustomerTable = () => {
  const initialCustomer = {
    name: "John Doe",
    category: "Regular",
    item: {
      name: "Tacos",
      item_type: "Veg",
      sub_type: ["jain", "swaminarayan", "regular"],
      taste: ["spicy", "medium", "light"],
      tags: ["best_seller", "kids", "starter", "yummy", "healthy"],
      price: 100,
    },
    payment: "Credit Card",
    status: "Delivered",
    date_time: "2024-02-12 15:30:00",
  };

  const [customer, setCustomer] = useState(initialCustomer);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
        <thead>
          <tr className="bg-green-300 ">
            <th className="py-2 px-4 text-xs text-left border-b">Index</th>
            <th className="py-2 px-4 text-xs text-left border-b">Name</th>
            <th className="py-2 px-4 text-xs text-left border-b">Category</th>
            <th className="py-2 px-4 text-xs text-left border-b">
              Item Information
            </th>
            <th className="py-2 px-4 text-xs text-left border-b">Payment</th>
            <th className="py-2 px-4 text-xs text-left border-b">Status</th>
            <th className="py-2 px-4 text-xs text-left border-b">Date Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition-colors">
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">{customer.name}</td>
            <td className="py-2 px-4 border-b">{customer.category}</td>
            <td className="py-2 px-4 border-b">
              <Popover trigger="click" placement="bottom">
                <PopoverTrigger>
                  <Button
                    variant="outlined"
                    size="small"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Item Information
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="border rounded-md shadow-md bg-white text-gray-800">
                  <div className="p-4">
                    <div className="mb-4 text-lg font-semibold border-b pb-2">
                      Item Information
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Name:</span>{" "}
                      {customer.item.name}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Item Type:</span>{" "}
                      {customer.item.item_type}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Sub Type:</span>{" "}
                      {customer.item.sub_type.join(", ")}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Taste:</span>{" "}
                      {customer.item.taste.map((taste, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-2 transition-transform transform hover:scale-105"
                        >
                          {taste}
                        </span>
                      ))}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Tags:</span>{" "}
                      {customer.item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-green-500 text-white px-2 py-1 rounded-md mr-2 transition-transform transform hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Price:</span>{" "}
                      {customer.item.price}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </td>
            <td className="py-2 px-4 border-b">{customer.payment}</td>
            <td className="py-2 px-4 border-b">{customer.status}</td>
            <td className="py-2 px-4 border-b">{customer.date_time}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
