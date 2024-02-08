"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import CategorySelect from "@/app/components/category/categorySelect";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stallName, setStallName] = useState("");
  const [stallLogo, setStallLogo] = useState(null);
  const [categories, setCategories] = useState(["Punjabi", "Burger"]);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("stallName", stallName);
      formData.append("stallLogo", stallLogo);
      formData.append("categories", JSON.stringify(categories));

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
      setError("Registration failed");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen w-full">
        {/* left part  */}
        <div className="md:col-span-1">
          <Image
            src="/images/bg-admin.jpg"
            alt="Description of the image"
            width={1040}
            height={2040}
            className="w-full h-full"
          />
        </div>

        {/* right part  */}
        <div className="md:col-span-2 w-full">
          <h1 className="text-xl font-medium mt-6 ml-14">
            Vendor Registration
          </h1>

          <div className="grid grid-cols-2 gap-5 pl-12 pr-12 pt-5 mt-4">
            <div className="w-full">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="First Name"
                className="w-full mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Last Name"
                className="w-full mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full mb-3">
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full mb-3">
              <Input
                isRequired
                variant="bordered"
                type="number"
                label="Phone Number"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <InputPassword onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="w-full mb-3">
              <ConfirmPassword onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="w-full mb-3">
              <CategorySelect />
            </div>

            <div className="w-full mb-3 flex items-center ml-2 gap-6">
              <p>Franchise :</p>
              <div className="flex gap-3">
                <button className="w-auto pl-10 pr-10 pt-1 pb-1 rounded bg-green-800 text-white font-medium">
                  Yes
                </button>
                <button className="w-auto pl-10 pr-10 pt-1 pb-1 rounded bg-gray-800 text-white font-medium">
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 pl-12 pr-12"> 
            <button className="w-full h-14 bg-green-800 rounded-md text-white font-medium text-xl" >Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
