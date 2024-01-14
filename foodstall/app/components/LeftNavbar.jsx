import React from 'react'
import Image from 'next/image'

function LeftNavbar() {
  return (
    <div className='h-screen w-full flex'>
        <div className="bg-white w-unit-64">
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
            <Image src="/images/home.png" alt="logo" width={30} height={30} />
            <h1 className="text-base font-medium text-green-600 lg:text-xl">
              Home
            </h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/food-order.png"
              alt="logo"
              width={34}
              height={34}
            />
            <h1 className="text-xl font-medium text-green-600">Food Order</h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image src="/images/menu.png" alt="logo" width={30} height={30} />
            <h1 className="text-xl font-medium text-green-600">Menu</h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image src="/images/bills.png" alt="logo" width={30} height={30} />
            <h1 className="text-xl font-medium text-green-600">Bills</h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/settings.png"
              alt="logo"
              width={30}
              height={30}
            />
            <h1 className="text-xl font-medium text-green-600">Settings</h1>
          </div>
          <div className="flex gap-4 items-center ml-8 pl-4">
            <Image
              src="/images/edit-profile.png"
              alt="logo"
              width={30}
              height={30}
            />
            <h1 className="text-xl font-medium text-green-600">Edit Profile</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar