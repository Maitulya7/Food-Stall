"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import CategorySelect from "@/app/components/category/categorySelect";
import axios from "axios";

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

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("vendor[first_name]", firstName);
      formData.append("vendor[last_name]", lastName);
      formData.append("vendor[email]", email);
      formData.append("vendor[phone_number]", phoneNumber);
      formData.append("vendor[password]", password);
      formData.append("vendor[confirm_password]", confirmPassword);
      formData.append(
        "vendor[type_of_categories]",
        JSON.stringify(categories)
      );
      formData.append("vendor[franchise]", franchise);
      formData.append("vendor[franchise_details]", franchiseDetails);
      formData.append("client_id", "GXXpMxkC4J2QXhDOcKFoWP3OJpusA-CnSkKX_O4twrM");

      axios
        .post(
          "https://food-court-api.as.r.appspot.com/api/v1/vendor/sign_up",
          formData,
          
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error("Error in Axios request:", err);
        });
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
        <div className="md:col-span-2 w-full m-auto">
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <InputPassword
                value={password}
                onChangeFunction={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <ConfirmPassword
                value={confirmPassword}
                onChangeFunction={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <CategorySelect
                handleSelectionChange={(e) => setCategories(e.target.value)}
              />
            </div>

            <div className="w-full mb-3 flex items-center ml-2 gap-6">
              <p>Franchise :</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleFranchiseChange("Yes")}
                  className={`w-auto pl-10 pr-10 pt-1 pb-1 rounded ${
                    franchise ? "bg-green-800" : "bg-gray-500"
                  } text-white font-medium`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleFranchiseChange("No")}
                  className={`w-auto pl-10 pr-10 pt-1 pb-1 rounded ${
                    !franchise ? "bg-green-800" : "bg-gray-500"
                  } text-white font-medium`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          {franchise && (
            <div className="w-full mt-4 pl-12 pr-12">
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
          <div className="w-full mt-8 pl-12 pr-12">
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
