"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import CategorySelect from "@/app/components/category/categorySelect";
import axios from "axios";
import DEFAULT_URL from "@/config";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [categories, setCategories] = useState([]);
  const [franchise, setFranchise] = useState(false);
  const [franchiseDetails, setFranchiseDetails] = useState("");
  const [error, setError] = useState("");

  const handleFranchiseChange = (value) => {
    setFranchise(value === "Yes");
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = e.target.value
      .split(",") // Split the input string into an array
      .map((category) => category.trim()) // Remove leading and trailing spaces
      .filter((category) => category !== ""); // Remove empty categories

    // Use a Set to ensure unique categories and then convert it back to an array
    setCategories((prevCategories) => [
      ...new Set([...prevCategories, ...selectedCategories]),
    ]);
  };

  console.log("Categories Selected: ", categories);
  const handleSubmit = () => {
    axios
      .post(
        `${DEFAULT_URL}/api/v1/vendor/sign_up`,
        

        {
          vendor: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password,
            confirm_password: confirmPassword,
            type_of_categories: categories,
            franchise: franchise,
            franchise_details: franchiseDetails,
          },
          client_id: "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI",
        },

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("Error in Axios request:", err.message);
      });
  };

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen w-full lg:p-0 pl-10 pr-10">
      {/* left part (image) for larger screens */}
      <div className="hidden md:block md:col-span-1">
        <Image
          src="/images/bg-admin.jpg"
          alt="Description of the image"
          width={1040}
          height={2040}
          className="w-full h-full"
        />
      </div>
  
      {/* right part  */}
      <div className="md:col-span-1 lg:col-span-2 w-full m-auto">
        <h1 className="text-xl font-medium  ml-4 md:ml-14">
          Vendor Registration
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-4 md:pl-12 pr-4 md:pr-12 pt-5 mt-4">
          <div className="w-full">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="First Name"
              className="w-full mb-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Last Name"
              className="w-full mb-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              variant="bordered"
              type="email"
              label="Email"
              className="w-full mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              variant="bordered"
              type="number"
              label="Phone Number"
              className="w-full mb-3"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
  
          <div className="w-full">
            <InputPassword
              value={password}
              onChangeFunction={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div className="w-full">
            <ConfirmPassword
              value={confirmPassword}
              onChangeFunction={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
  
          <div className="w-full">
            <CategorySelect handleSelectionChange={handleCategoryChange} />
          </div>
  
          <div className="w-full flex items-center ml-2 gap-6">
            <p>Franchise :</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleFranchiseChange("Yes")}
                className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${
                  franchise ? "bg-green-800" : "bg-gray-500"
                } text-white font-medium`}
              >
                Yes
              </button>
              <button
                onClick={() => handleFranchiseChange("No")}
                className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${
                  !franchise ? "bg-green-800" : "bg-gray-500"
                } text-white font-medium`}
              >
                No
              </button>
            </div>
          </div>
        </div>
        {franchise && (
          <div className="w-full mt-4 pl-4 md:pl-12 pr-4 md:pr-12">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Franchise Details"
              className="w-full"
              value={franchiseDetails}
              onChange={(e) => setFranchiseDetails(e.target.value)}
            />
          </div>
        )}
        <div className="w-full mt-8 pl-4 md:pl-12 pr-4 md:pr-12">
          <button
            onClick={handleSubmit}
            className="w-full h-14 bg-green-800 rounded-md text-white font-medium text-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </>
  
  
  
  );
};

export default Register;
