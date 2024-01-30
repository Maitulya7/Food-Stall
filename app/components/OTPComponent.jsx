"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { useRef, useState } from "react";

const maxPinLength = 4;

export default function OTPComponent() {
  return (
    <div className="flex mb-4">
      <div className="flex space-x-4 border-black border-1 mr-2">
        <div className="w-14 h-14 relative rounded-lg overflow-hidden">
          <input
            className="w-full h-full text-center border-none outline-none"
            type="password"
          ></input>
        </div>
      </div>
      <div className="flex space-x-4  border-black border-1 mr-2">
        <div className="w-14 h-14 relative rounded-lg overflow-hidden">
          <input
            className="w-full h-full text-center border-none outline-none"
            type="password"
          ></input>
        </div>
      </div>
      <div className="flex space-x-4  border-black border-1 mr-2">
        <div className="w-14 h-14 relative rounded-lg overflow-hidden">
          <input
            className="w-full h-full text-center border-none outline-none"
            type="password"
          ></input>
        </div>
      </div>
      <div className="flex space-x-4  border-black border-1 mr-2s">
        <div className="w-14 h-14 relative rounded-lg overflow-hidden">
          <input
            className="w-full h-full text-center border-none outline-none"
            type="password"
          ></input>
        </div>
      </div>
    </div>
  );
}
