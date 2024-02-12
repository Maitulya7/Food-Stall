"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const CustomerTable = () => {
  const customersData = [
    {
      name: "John Doe",
      category: "Chinese",
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
    },
    {
      name: "Jane Smith",
      category: "Punjabi",
      item: {
        name: "Sushi",
        item_type: "Non-Veg",
        sub_type: ["deluxe", "special", "regular"],
        taste: ["salty", "savory", "umami"],
        tags: ["premium", "exotic", "seafood", "chef_special"],
        price: 150,
      },
      payment: "Mobile Wallet",
      status: "Pending",
      date_time: "2024-02-13 18:45:00",
    },
    {
      name: "Mike Johnson",
      category: "Chinese",
      item: {
        name: "Burger",
        item_type: "Non-Veg",
        sub_type: ["classic", "spicy", "cheese-filled"],
        taste: ["salty", "umami", "rich"],
        tags: ["classic_favorites", "fast_food", "meaty"],
        price: 120,
      },
      payment: "Cash on Delivery",
      status: "In Progress",
      date_time: "2024-02-14 12:15:00",
    },
    {
      name: "Sarah Williams",
      category: "Chinese",
      item: {
        name: "Steak",
        item_type: "Non-Veg",
        sub_type: ["medium", "well_done", "rare"],
        taste: ["savory", "spicy", "smoky"],
        tags: ["premium_cut", "grilled", "special_occasion"],
        price: 180,
      },
      payment: "Credit Card",
      status: "Delivered",
      date_time: "2024-02-15 20:00:00",
    },
    {
      name: "Chris Anderson",
      category: "Chinese",
      item: {
        name: "Pizza",
        item_type: "Veg",
        sub_type: ["veggie_supreme", "margherita", "hawaiian"],
        taste: ["cheesy", "crispy", "savory"],
        tags: ["family_size", "party_favorite", "classic"],
        price: 90,
      },
      payment: "Online Transfer",
      status: "Delivered",
      date_time: "2024-02-16 16:30:00",
    },
    // Add more customers as needed
  ];

  const [customer, setCustomer] = useState(customersData[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
        <thead>
          <tr className="bg-green-800 text-white ">
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
          {customersData.map((customer, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.category}</td>
              <td className="py-2 px-4 border-b">
                <Popover trigger="click" placement="bottom">
                  <PopoverTrigger>
                    <Button
                      variant="outlined"
                      size="small"
                      className="bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    >
                    Item Details
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
                            className="inline-block bg-blue-700 text-white px-3 py-2 rounded-md mr-2 mb-2 transition-all transform hover:scale-105"
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
                            className="inline-block bg-green-600 text-white px-3 py-2 rounded-md mr-2 mb-2 transition-all transform hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Price:</span> $
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
