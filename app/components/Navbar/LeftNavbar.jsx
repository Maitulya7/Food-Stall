import React from "react";
import Image from "next/image";
import Link from "next/link";

const LeftNavbar = () => {
  return (
    <div >
      <div className="bg-white w-full pt-1 ">
        <div className="flex gap-2 items-center ml-8 mt-10 mb-14">
          <Image
            src="/images/admin-logo.png"
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className="text-2xl font-semibold text-green-600">FoodM</h1>
        </div>

        <div className="flex flex-col  gap-10 pb-20">
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image src="/images/home.png" alt="logo" width={28} height={28} />
            <Link
              href="/admin/dashboard"
              className="text-base font-medium text-green-600 lg:text-lg "
            >
              Home
            </Link>
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
    </div>
  );
};

export default LeftNavbar;
