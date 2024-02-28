"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import InputPassword from "../../components/password/InputPassword";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DEFAULT_URL from "@/config";
import Lottie from 'lottie-react';
import animationData from '@/public/images/super-admin-animation-2.json'

const Admin = () => {
  const router = useRouter();

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
          `${DEFAULT_URL}/api/v1/admin/login`,
          {
            admin: {
              email: values.email,
              password: values.password,
            },
            client_id: "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI",
          }
        );

        if (response.status === 200) {
          localStorage.setItem("access-token", response.data.admin.access_token);
          toast.success("Login successful!", {
            position: "top-right",
          });
          router.push("/super-admin/dashboard");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
          autoClose: 5000, // Close the toast after 5 seconds
        });
      }
    },
  });

  const forgotPassword = () => {
    router.push("/super-admin/login/forgotPassword");
  }

  const signUpPage = () => {
    router.push("/super-admin/signUp");
  }

  return (
    <>
      <div className="flex  lg:flex-row justify-between h-screen">
        <div className="md:h-screen w-full lg:mt-0  mt-32 ">
          <div className="flex justify-center mt-12  w-full">
            <div className="flex flex-col w-full p-20">
              <h1 className="text-3xl font-semibold mb-1 ml-2">Admin Login!</h1>
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
                  Don't have an account? Signup 
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
      <ToastContainer />
    </>
  );
};

export default Admin;
