import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import OTPComponent from "../components/OTPComponent";
const Admin = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between h-screen">
        <div className="md:h-screen md:w-1/2">
          <div className="flex justify-center mt-12 md:mt-40 w-full">
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold mb-1 ml-2">
                Super Admin Login{" "}
              </h1>

              <p className="ml-2 mb-1 font-medium text-sm">Phone Number</p>
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Phone"
                className="w-full mb-6"
              />
              <p className="ml-2 mb-1 font-medium text-sm">OTP</p>
              <OTPComponent />
              <button className="bg-green-900 h-12 rounded-lg text-white font-medium w-full">
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-screen w-1/2 relative">
          <Image
            src="/images/chris-lee-70l1tDAI6rM-unsplash 2.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
