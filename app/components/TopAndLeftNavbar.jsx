import React from "react";
import Image from "next/image";
import {User} from "@nextui-org/react";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";
import Link from "next/link";

function LeftNavbar() {
  return (
    <div className="h-screen w-full flex bg-green-50">
      <div className="bg-white w-unit-72">
        <div className="flex gap-2 items-center ml-8 mt-10 mb-14">
          <Image
            src="/images/admin-logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
        </div>

        <div className="flex flex-col gap-10 ">
          <div className="flex gap-4 items-center ml-8 border-l-5 border-green-600 pl-4">
            <Image src="/images/home.png" alt="logo" width={28} height={28} />
            <h1 className="text-base font-medium text-green-600 lg:text-lg ">
              Home
            </h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/food-order.png"
              alt="logo"
              width={28}
              height={28}
            />
            <Link
              href="/admin/foodOrder"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Food Order
            </Link>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image src="/images/menu.png" alt="logo" width={28} height={28} />
            <Link
              href="/admin/menu"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Menu
            </Link>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image src="/images/bills.png" alt="logo" width={28} height={28} />
            <Link
              href="/admin/bills"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Bills
            </Link>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/settings.png"
              alt="logo"
              width={28}
              height={28}
            />
              <Link
              href="/admin/setting"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Setting
            </Link>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/edit-profile.png"
              alt="logo"
              width={28}
              height={28}
            />
              <Link
              href="/admin/editProfile"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full m-10 h-10 items-center ">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">Home </h1>
          <h1 className="text-2xl">🏠</h1>
        </div>

        <div className="h-10 w-1/3 justify-center flex">
          <input
            className="p-5 pl-8 w-full rounded-2xl border-2 border-slate-200 focus:outline-none focus:border-green-200"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-6 ">
          <Badge
            className="hover:cursor-pointer w-7 h-7"
            content="5"
            shape="circle"
            color="danger"
          >
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="bordered"
              className="w-12 h-12"
            >
              <NotificationIcon size={28} />
            </Button>
          </Badge>
          <User   
      name="Junior Garcia"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @jrgarciadev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
        size:"lg"
      }}
    />
        </div>
      </div>
    </div>
  );
}

export default LeftNavbar;
