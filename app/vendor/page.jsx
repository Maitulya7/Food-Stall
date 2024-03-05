"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import InputPassword from "@/app/components/password/InputPassword";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DEFAULT_URL from "@/config";
import Lottie from 'lottie-react';
import animationData from '@/public/images/super-admin-animation-2.json'
import EditProfile from "./editProfile/page";


const Admin = () => {
  const router = useRouter();
  const [vendorData , setVendorData ] = useState(null);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${DEFAULT_URL}/api/v1/vendor/login`,
          {
            vendor: {
              email: values.email,
              password: values.password,
            },
            client_id: "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI",
          }
        );

        if (response.status === 200) {
           axios.get(
            `${DEFAULT_URL}/api/v1/vendor/${response.data.vendor.id}`, 
            {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            }
          );
          setVendorData(response.data.vendor);
          localStorage.setItem("access-token", response.data.access_token);
          toast.success("Login successful!", {
            position: "top-right",
          });
          router.push("/vendor/dashboard");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
          autoClose: 5000, 
        });
      }
    },
  });

  const forgotPassword = () => {
    router.push("/vendor/forgotPassword");
  }

  const signUpPage = () => {
    router.push("/vendor/registration");
  }

  return (
    <>
      <div className="flex  lg:flex-row justify-between h-screen">
        <div className="md:h-screen w-full lg:mt-0  mt-32 ">
          <div className="flex justify-center mt-12  w-full">
            <div className="flex flex-col w-full p-20">
              <h1 className="text-3xl font-semibold mb-1 ml-2">Vendor Login!</h1>
              <p className="text-base mb-8 ml-2">
                Enter your credentials to access your account
              </p>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 ml-2 mt-2">{formik.errors.email}</p>
              )}
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-6"
                {...formik.getFieldProps('email')}
              />


              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 ml-2 mt-2">{formik.errors.password}</p>
              )}
              <InputPassword
                value={formik.values.password}
                onChangeFunction={(e) => formik.setFieldValue('password', e.target.value)}
              />



              <button
                onClick={formik.handleSubmit}
                className="bg-[#12372A] mt-8 h-12 rounded-lg text-white font-medium w-full"
              >
                Login
              </button>

              <div className="flex justify-between mt-8">
                <button
                  onClick={forgotPassword}
                  className="text-[#12372A] hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>

                <button
                  onClick={signUpPage}
                  className="text-[#12372A] hover:underline cursor-pointer"
                >
                  Don't have an account? Register 
                </button> 
              </div>
              
            </div>

          </div>
        </div>

        <div className="block lg:h-screen pr-16 items-center w-full relative">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>
      <EditProfile vendorData={vendorData} />
      <ToastContainer />
    </>
  );
};

export default Admin;
