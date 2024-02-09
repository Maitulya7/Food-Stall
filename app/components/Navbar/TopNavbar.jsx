import React from "react";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "../NotificationIcon";
import Link from "next/link";

const TopNavbar = ({ pageTitle, pageEmoji }) => {
  return (
    <div className="flex w-full">
      <div className="flex justify-between w-full m-7 h-7 items-center ">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">{pageTitle} </h1>
          <h1 className="text-2xl">{pageEmoji}</h1>
        </div>

        <div className="flex items-center gap-6 ">
          <Link href="/super-admin/request/pending">
          <Badge
            className="hover:cursor-pointer w-7 h-7"
            content="1"
            shape="circle"
            color="danger"
          >
           
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="bordered"
                className="w-10 h-10"
              >
                <NotificationIcon size={28} />
              </Button>
          </Badge>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
