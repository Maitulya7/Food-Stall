"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import InputPassword from "../components/password/InputPassword";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DEFAULT_URL from "@/config";

const Admin = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      const formData = new FormData();
      formData.append("vendor[email]", values.email);
      formData.append("vendor[password]", values.password);
      formData.append(
        "client_id",
        "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI"
      );

      axios
        .post(
          `${DEFAULT_URL}/api/v1/vendor/login`,
          formData,

          // {
          //   headers: {
          //     Authorization: "Bearer " + localStorage.setItem("access-token"),
          //     "ngrok-skip-browser-warning": true,
          //   },
          // }
        )
        
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            router.push("/admin/dashboard");
            toast.success("Login successful!", {
              position: "top-right",
            });
            localStorage.setItem("access-token", res.data.vendor.access_token);

            console.log(res.data.vendor.categories);

            const categoriesData = res.data.vendor.categories;
            const jsonString = JSON.stringify(categoriesData);
            localStorage.setItem("categoriesData", jsonString);
          }
        })
        .catch((err) => {
          console.error("Error in Axios request:", err);
        });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form>
        <div className="flex flex-col-reverse md:flex-row justify-between h-screen ">
          <div className="lg:p-0 p-14 w-full h-full flex items-center">
            <div className="flex justify-center mt-8 md:mt-12 w-full">
              <div className="flex flex-col w-full md:w-3/4 lg:w-1/2">
                <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-1 ml-2">
                  Welcome back!
                </h1>
                <p className="text-base md:text-sm lg:text-base mb-6 ml-2">
                  Enter your credentials to access your account
                </p>

                <div className="flex flex-col items-center ">
                  <div className="w-full mb-4 md:mb-6 ">
                    <p className="ml-2 mb-1 font-medium text-sm">Email Address</p>
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 ml-2 mt-2"
                    />
                    <Field
                      type="email"
                      name="email"
                      as={Input}
                      isRequired
                      variant="bordered"
                      label="Email"
                      className="w-full"
                    />
                 
                  </div>
                  <div className="w-full mb-6">
  <p className="ml-2 mb-1 font-medium text-sm">Password</p>
  <ErrorMessage
    name="password"
    component="p"
    className="text-red-500 ml-2 mt-2"
  />
  <Field
      type="password"
      name="password"
      as={Input}
      isRequired
      variant="bordered"
      label="Passowrd"
      className="w-full"
  />

</div>
                </div>

                {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}

                <button
                  type="submit"
                  className="bg-green-900 mt-6 md:mt-10 h-12 rounded-lg text-white font-medium w-full"
                  >
                  Login
                </button>

                <div className="flex items-center justify-center mt-4 md:mt-5">
                  <div className="w-12 md:w-24 bg-slate-400 h-0.5"></div>
                  <p className="m-3">Or</p>
                  <div className="w-12 md:w-24 bg-slate-400 h-0.5"></div>
                </div>

                <p className="flex items-center justify-center mt-6 md:mt-10 text-base">
                  Don’t have an account?
                  <Link
                    href="/admin/registration"
                    className="ml-1 text-blue-700 font-medium cursor-pointer hover:underline"
                    >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-screen w-full md:w-1/2 relative">
            <Image
              src="/images/bg-admin-login.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
      </Form>
     
    </Formik>
    <ToastContainer />
              </>
  );
};

export default Admin;
