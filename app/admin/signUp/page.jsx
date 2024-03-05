"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@nextui-org/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputPassword from '../../components/password/InputPassword';
import axios from 'axios';
import DEFAULT_URL from '@/config';
import { useRouter } from "next/navigation";
import Lottie from 'lottie-react';
import animationData from '@/public/images/super-admin-signUp.json'

const Admin = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [emailExistsError, setEmailExistsError] = useState(false);

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
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/(?=.*[0-9])/, 'Password must contain at least one number'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${DEFAULT_URL}/api/v1/admin/sign_up`,
          {
            admin: {
              email: values.email,
              password: values.password,
            },
            client_id: "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI"
          }
        );
        console.log(response);
      } catch (error) {
        console.error('Error logging in:', error);
        if (error.response && error.response.status === 409) {
          // HTTP 409 indicates conflict, in this case, email already exists
          setEmailExistsError(true);
        } else {
          setError('Failed to log in. Please check your credentials.');
        }
      }
    },
  });

  const loginPage = () => {
    router.push("/super-admin/login");
  }

  return (
    <>
      <div className="flex lg:flex-row justify-between h-screen">
        <div className="md:h-screen w-full lg:w-1/2">
          <div className="flex justify-center mt-12 w-full">
            <div className="flex flex-col w-full p-20 lg:mt-0 mt-32">
              <h1 className="text-3xl font-semibold mb-1 ml-2">Admin SignUp!</h1>
              <p className="text-base mb-8 ml-2">Enter your credentials to access your account</p>
              
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-6"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 ml-2 mt-2">{formik.errors.email}</p>
              )}
              
              <InputPassword
                value={formik.values.password}
                onChangeFunction={(e) => formik.setFieldValue('password', e.target.value)}
              />

              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 ml-2 mt-2">{formik.errors.password}</p>
              )}

              {emailExistsError && (
                <p className="text-red-500 ml-2 mt-2">Email is already taken. Please use a different email.</p>
              )}

              {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}

              <button
                onClick={formik.handleSubmit}
                className="bg-[#12372A] h-12 mt-8 rounded-lg text-white font-medium w-full"
              >
                Sign Up
              </button>

              <div className="flex justify-start mt-8">

                <button
                  onClick={loginPage}
                  className="text-[#12372A] hover:underline cursor-pointer"
                >
                  Already have an account? Login 
                </button> 
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:h-full pr-16 items-center w-1/2 relative">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-full h-full "
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
