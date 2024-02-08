import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./categoryData";

export default function CategorySelect() {
  const [values, setValues] = React.useState(new Set([]));

  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };

  return (
    <div className="w-full">
      <Select
        label="Favorite Animal"
        selectionMode="multiple"
        variant="bordered"
        placeholder="Select an animal"
        selectedKeys={values}
        className=""
        onChange={handleSelectionChange}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>      
  );
}
