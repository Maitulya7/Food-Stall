import React from "react";
import MenuItem from "./MenuItem";

const MenuTable = ({ menu }) => {
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
        {menu.food_item.sub_type.map((subType, index) => (
          <MenuItem
            key={index}
            index={index}
            name={menu.food_item.name}
            itemType={menu.food_item.item_type}
            subType={subType}
            taste={menu.food_item.taste}
            tags={menu.food_item.tags}
            price={menu.food_item.price}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MenuTable;
