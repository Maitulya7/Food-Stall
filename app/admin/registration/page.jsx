"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import CategorySelect from "@/app/components/category/categorySelect";
import axios from "axios";
import DEFAULT_URL from "@/config";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      categories: [],
      franchise: false,
      franchiseDetails: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is Required"),
      lastName: Yup.string().required("Last name is Required"),
      email: Yup.string().email("Invalid email address").required("Email is Required"),
      phoneNumber: Yup.number().required("Number is Required"),
      password: Yup.string().required("Password is Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is  Required"),
      franchise: Yup.bool(),
      franchiseDetails: Yup.string().required("Franchise Detial is Require") 
    }),
    onSubmit: (values) => {
      axios
        .post(
          `${DEFAULT_URL}/api/v1/vendor/sign_up`,
          {
            vendor: {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              phone_number: values.phoneNumber,
              password: values.password,
              confirm_password: values.confirmPassword,
              type_of_categories: values.categories,
              franchise: values.franchise,
              franchise_details: values.franchiseDetails,
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
    },
  });

  const handleFranchiseChange = (value) => {
    const event = {
      target: {
        name: "franchise",
        value: value === "Yes",
      },
    };
    formik.handleChange(event);
  };


  const handleCategoryChange = (e) => {
    const selectedCategories = e.target.value
      .split(",")
      .map((category) => category.trim())
      .filter((category) => category !== "");

    formik.setFieldValue("categories", [
      ...new Set([...formik.values.categories, ...selectedCategories]),
    ]);
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

        <div className="md:col-span-1 lg:col-span-2 w-full m-auto">
          <h1 className="text-xl font-medium ml-4 md:ml-14">
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
                value={formik.values.firstName}
                onChange={formik.handleChange("firstName")}

              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Last Name"
                className="w-full mb-3"
                value={formik.values.lastName}
                onChange={formik.handleChange("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.lastName}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-3"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.email}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                isRequired
                variant="bordered"
                type="number"
                label="Phone Number"
                className="w-full mb-3"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange("phoneNumber")}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.phoneNumber}</p>
              )}
            </div>

            <div className="w-full">
              <InputPassword
                value={formik.values.password}
                onChangeFunction={(e) =>
                  formik.handleChange("password")(e.target.value)
                }
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.password}</p>
              )}
            </div>

            <div className="w-full">
              <ConfirmPassword
                value={formik.values.confirmPassword}
                onChangeFunction={(e) =>
                  formik.handleChange("confirmPassword")(e.target.value)
                }
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <div className="w-full">
              <CategorySelect handleSelectionChange={handleCategoryChange} />
            </div>

            <div className="w-full flex items-center ml-2 gap-6">
              <p>Franchise :</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleFranchiseChange("Yes")}
                  className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${formik.values.franchise
                      ? "bg-green-800"
                      : "bg-gray-500"
                    } text-white font-medium`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleFranchiseChange("No")}
                  className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${!formik.values.franchise
                      ? "bg-green-800"
                      : "bg-gray-500"
                    } text-white font-medium`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          {formik.values.franchise && (
            <div className="w-full mt-4 pl-4 md:pl-12 pr-4 md:pr-12">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Franchise Details"
                className="w-full"
                value={formik.values.franchiseDetails}
                onChange={formik.handleChange("franchiseDetails")}
              />
              {formik.touched.franchiseDetails && formik.errors.franchiseDetails && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.franchiseDetails}</p>
              )}
            </div>
          )}
          <div className="w-full mt-8 pl-4 md:pl-12 pr-4 md:pr-12">
            <button
              onClick={formik.handleSubmit}
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
