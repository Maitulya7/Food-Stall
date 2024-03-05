"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeIcons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeIcons/EyeSlashFilledIcon";

export default function InputPassword({onChangeFunction}) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      label="Password"
      variant="bordered"
      onChange={onChangeFunction}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-full"
    />
  );
}
