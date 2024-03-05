"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import CategorySelect from "@/app/components/category/categorySelect";
import axios from "axios";
import Swal from 'sweetalert2'
import Lottie from 'lottie-react';
import animationData from '@/public/images/vendor-animation-registration.json'
import DEFAULT_URL from "@/config";




const Register = () => {
  const [pic , setPic] = useState()
  const [imgUrl , setImgUrl] = useState("")
  const [cat, setCat] = useState([]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      categories: cat,
      franchise: false,
      franchiseDetails: "",
      stallName: "",
      stallLogo: imgUrl,
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required("First name is Required"),
    //   lastName: Yup.string().required("Last name is Required"),
    //   email: Yup.string().email("Invalid email address").required("Email is Required"),
    //   phoneNumber: Yup.number().required("Number is Required"),
    //   password: Yup.string().required("Password is Required"),
    //   confirmPassword: Yup.string()
    //     .oneOf([Yup.ref("password"), null], "Passwords must match")
    //     .required("Confirm password is  Required"),
    //   franchise: Yup.bool(),
    //   franchiseDetails: Yup.string(),
    //   stallName: Yup.string().required("Stall name is Required"),
    // }),
    onSubmit: (values) => {
      formik.values.categories = cat;
      const formData = new FormData()
      formData.append("vendor[first_name]", values.firstName) 
      formData.append("vendor[last_name]", values.lastName) 
      formData.append("vendor[email]", values.email) 
      formData.append("vendor[phone_number]", values.phoneNumber) 
      formData.append("vendor[password]", values.password) 
      formData.append("vendor[confirm_password]", values.confirmPassword) 
      formData.append("vendor[type_of_categories]", JSON.stringify(values.categories));
      formData.append("vendor[franchise]", values.franchise) 
      formData.append("vendor[franchise_details]", values.franchiseDetails) 
      formData.append("vendor[stall_name]", values.stallName) 
      formData.append("vendor[stall_logo]", pic) 
      formData.append("client_id","egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI")

      
      console.log(values);
      
      axios
        .post(
          `${DEFAULT_URL}/api/v1/vendor/sign_up`,
          formData,
          {
            headers: {
              "ngrok-skip-browser-warning": true,
            },
          }
        )
        .then((res) => {
          console.log(formData);
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
  
    const uniqueCategoriesSet = new Set(selectedCategories);
    const uniqueCategories = [...uniqueCategoriesSet];
    console.log(uniqueCategories);
    setCat(uniqueCategories)
    
    formik.setFieldTouched("categories", true);
    formik.setFieldError("type_of_categories", null);
  };
  
  

  const uploadImage = async () => {
    const { value: file } = await Swal.fire({
        title: "Select image",
        input: "file",
        inputAttributes: {
            "accept": "image/*",
            "aria-label": "Upload your Aadhar card/ Pan card"
        }
    });
    if (file) {
        setPic(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log(e.target.result)
          setImgUrl(e.target.result)
            Swal.fire({
                title: "Your Stall Logo",
                imageUrl: e.target.result,
                imageAlt: "The uploaded picture",
                imageWidth: 300,  
                imageHeight: 300  
            });
        };
        reader.readAsDataURL(file);
    }
}



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 h-screen w-full lg:p-0  px-10">
     
      <div className="hidden pl-10 sm:inline-block">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-full h-full"
        />
      </div>


        <div className="md:col-span-1 lg:col-span-2 p-4 lg:p-4  w-full m-auto">
          <h1 className="text-xl font-medium ml-4 md:ml-14">
            Vendor Registration
          </h1>
          <form onSubmit={formik.handleSubmit} >


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-4 md:pl-12 pr-4 md:pr-12 pt-5 ">

              <div className="w-full">
                <Input
                  
                  variant="bordered"
                  type="text"
                  label="First Name"
                  className="w-full mb-2"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}

                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.firstName}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  
                  variant="bordered"
                  type="text"
                  label="Last Name"
                  className="w-full mb-2"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.lastName}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  
                  variant="bordered"
                  type="email"
                  label="Email"
                  className="w-full mb-2"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.email}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  
                  variant="bordered"
                  type="number"
                  label="Phone Number"
                  className="w-full mb-2"
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
                  <p className="text-red-500 text-sm ml-2 mt-2">{formik.errors.password}</p>
                )}
              </div>

              <div className="w-full mb-2">
                <ConfirmPassword
                  value={formik.values.confirmPassword}
                  onChangeFunction={(e) =>
                    formik.handleChange("confirmPassword")(e.target.value)
                  }
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm ml-2 mt-2">{formik.errors.confirmPassword}</p>
                )}
              </div>

              <div className="w-full">
                <CategorySelect newValue={formik.values.categories} handleSelectionChange={handleCategoryChange} />
                {formik.touched.categories && formik.errors.type_of_categories && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.type_of_categories}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  
                  variant="bordered"
                  type="text"
                  label="Stall Name"
                  className="w-full mb-2"
                  value={formik.values.stallName}
                  onChange={formik.handleChange("stallName")}
                />
                {formik.touched.stallName && formik.errors.stallName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.stallName}</p>
                )}
              </div>


              <div className="w-full">


              <button type="button" className="w-full bg-green-800 p-2 cursor-pointer text-white font-bold rounded-lg"  onClick={uploadImage}>Upload Logo</button>
            
              </div>

               
              <div className="w-full flex items-center ml-2 gap-6">
                <p>Franchise :</p>
                <div className="flex gap-3">
                  <button
                   type="button"
                    onClick={() => handleFranchiseChange("Yes")}
                    className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${formik.values.franchise
                      ? "bg-green-800"
                      : "bg-gray-500"
                      } text-white font-medium`}
                  >
                    Yes
                  </button>
                  <button
                   type="button"
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
                type="submit"
                className="w-full h-14 bg-green-800 rounded-md text-white font-medium text-xl"
              >
                Submit
              </button>
            </div>


          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
