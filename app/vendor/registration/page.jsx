"use client"
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import animationData from '@/public/images/vendor-animation-registration.json';
import DEFAULT_URL from "@/config";
import { Input , Select , SelectItem} from "@nextui-org/react";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";
import * as Yup from 'yup';


const Register = () => {

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    categories: Yup.array().min(1, 'Select at least one category').required('Categories are required'),
    stallName: Yup.string().required('Stall Name is required'),
    franchiseDetails: Yup.string().when('franchise', {
      is: true,
      then: Yup.string().required('Franchise Details are required when selecting "Yes" for Franchise'),
    }),
  });
  const [pic, setPic] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = () => {
    try {
      axios
        .get(`${DEFAULT_URL}/api/v1/admin/categories`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
          },
        })
        .then((res) => {
          const fetchedCategories = res.data.categories || [];
          setCategories(fetchedCategories);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

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
      stallName: "",
      stallLogo: imgUrl,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("vendor[first_name]", values.firstName);
      formData.append("vendor[last_name]", values.lastName);
      formData.append("vendor[email]", values.email);
      formData.append("vendor[phone_number]", values.phoneNumber);
      formData.append("vendor[password]", values.password);
      formData.append("vendor[confirm_password]", values.confirmPassword);
      formData.append("vendor[type_of_categories]", (values.categories));
      formData.append("vendor[franchise]", values.franchise);
      formData.append("vendor[franchise_details]", values.franchiseDetails);
      formData.append("vendor[stall_name]", values.stallName);
      formData.append("vendor[stall_logo]", pic);
      formData.append("client_id", "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI");

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
    formik.handleChange({
      target: {
        name: "franchise",
        value: value === "Yes",
      },
    });
  };

  const handleCategoryChange = (index, newValue) => {
    const updatedCategories = [...formik.values.categories];

    if (newValue && newValue.name) {
      updatedCategories[index] = newValue.name;
    } else {
      updatedCategories.splice(index, 1);
    }

    formik.setFieldValue("categories", updatedCategories);
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
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen w-full lg:p-0 px-10">
        <div className="hidden pl-10 sm:inline-block">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
        <div className="md:col-span-1 lg:col-span-2 p-4 lg:p-4 w-full m-auto">
          <h1 className="text-xl font-medium ml-4 md:ml-14">
            Vendor Registration
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-4 md:pl-12 pr-4 md:pr-12 pt-5 ">
              <Input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder="First Name"
                error={formik.touched.firstName && formik.errors.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.firstName}</p>
              )}
              <div className="w-full">
                <Input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.lastName}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.email}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="number"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  placeholder="Phone Number"
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
              <Select
              items={categories}
              label="Category"
              placeholder="Select Category"
              className="max-w-xs"
              selectionMode="multiple"
              onChange={(selectedOption) => {
                const selectedCategory = selectedOption.target.value
                  .split(",")
                  .map((category) => category.trim())
                  .filter((category) => category !== "");

                  const updatedCategories = Array.from(
                    new Set([...formik.values.categories, ...selectedCategory])
                  );

                formik.handleChange("type_of_categories", updatedCategories);
              }}
            >
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.name}
                </SelectItem>
              ))}
            </Select>
              </div>


              <div className="w-full">
                <Input
                  type="text"
                  name="stallName"
                  value={formik.values.stallName}
                  onChange={formik.handleChange}
                  placeholder="Stall Name"
                />
                {formik.touched.stallName && formik.errors.stallName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.stallName}</p>
                )}
              </div>
              <div className="w-full">
                <button
                  type="button"
                  onClick={uploadImage}
                  className="w-full bg-green-800 p-2 cursor-pointer text-white font-bold rounded-lg"
                >
                  Upload Logo
                </button>
              </div>
              <div className="w-full flex items-center ml-2 gap-6">
                <p>Franchise :</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleFranchiseChange("Yes")}
                    className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${formik.values.franchise ? "bg-green-800" : "bg-gray-500"} text-white font-medium`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFranchiseChange("No")}
                    className={`w-auto pl-4 pr-4 pt-1 pb-1 rounded ${!formik.values.franchise ? "bg-green-800" : "bg-gray-500"} text-white font-medium`}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
            {formik.values.franchise && (
              <div className="w-full mt-4 pl-4 md:pl-12 pr-4 md:pr-12">
                <Input
                  type="text"
                  name="franchiseDetails"
                  value={formik.values.franchiseDetails}
                  onChange={formik.handleChange}
                  placeholder="Franchise Details"
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
