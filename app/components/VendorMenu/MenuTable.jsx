import React from "react";
import MenuItem from "./MenuItem";
import { DEFAULT_URL } from "@/config"; 

const MenuTable = ({ menu  , fetchApiData }) => {
  console.log("Received menu data:", menu);

  const handleDelete = (deletedItemId) => {
    console.log(`Item with ID ${deletedItemId} deleted. Updating state...`);
  };

  return (
    <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
      <thead>
        <tr className="bg-green-800 text-white ">
          <th className="py-2 px-4 text-xs text-left border-b">Index</th>
          <th className="py-2 px-4 text-xs text-left border-b">Name</th>
          <th className="py-2 px-4 text-xs text-left border-b">Item Type</th>
          <th className="py-2 px-4 text-xs text-left border-b">Sub Type</th>
          <th className="py-2 px-4 text-xs text-left border-b">Taste</th>
          <th className="py-2 px-4 text-xs text-left border-b">Tags</th>
          <th className="py-2 px-4 text-xs text-left border-b">Price</th>
          <th className="py-2 px-4 text-xs text-left border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {menu && menu.food_items ? (
          menu.food_items.map((menuItem, index) => (
            <MenuItem
              key={menuItem.id}
              index={index}
              id={menuItem.id}
              name={menuItem.name || ""}
              itemType={menuItem.item_type || ""}
              subType={menuItem.sub_type || []}
              taste={menuItem.taste || []}
              tags={menuItem.tags || []}
              price={menuItem.price || ""}
              onDelete={handleDelete}
              fetchApiData={fetchApiData}
            />
          ))
        ) : (
          <tr>
            <td colSpan="8">No menu data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MenuTable;
