import React from "react";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "../NotificationIcon";
import Link from "next/link";

const TopNavbar = ({ pageTitle, pageEmoji }) => {
  return (
    <div className="flex w-full">
      <div className="flex justify-between w-full  items-center ">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">{pageTitle} </h1>
          <h1 className="text-2xl">{pageEmoji}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
