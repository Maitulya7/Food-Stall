"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import InputPassword from "../components/InputPassword";
import axios from "axios";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      axios
        .post("https://food-court-api.as.r.appspot.com/api/v1/admin/sign_up", {
          admin: {
            email: { email },
            password: { password },
          },
          client_id: "GXXpMxkC4J2QXhDOcKFoWP3OJpusA-CnSkKX_O4twrM",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 h-full">
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
          <h1 className="text-3xl font-semibold mb-4">Welcome back!</h1>
          <p className="text-base mb-8">
            Enter your credentials to access your account
          </p>

          <div className="w-1/2 mb-6">
            <p className="ml-2 mb-1 font-medium text-sm">Email Address</p>
            <Input
              isRequired
              variant="bordered"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-1/2 mb-2">
            <p className="ml-2 mb-1 font-medium text-sm">Password</p>
            <InputPassword
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}

          <button
            onClick={handleLogin}
            className="bg-green-900 h-12 rounded-lg text-white font-medium w-1/2 mb-6"
          >
            Login
          </button>

          <div className="flex items-center justify-center mb-4">
            <div className="w-16 md:w-48 bg-slate-400 h-0.5"></div>
            <p className="mx-3">Or</p>
            <div className="w-16 md:w-48 bg-slate-400 h-0.5"></div>
          </div>
          <div className="flex justify-center items-center gap-7">
            <button className="flex items-center justify-center bg-white border border-gray-400 rounded-lg px-4 py-2">
              <Image
                src="/images/google.png"
                alt="Google"
                width={24}
                height={24}
              />
              <span className="ml-2">Sign in with Google</span>
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-400 rounded-lg px-4 py-2">
              <Image
                src="/images/apple.png"
                alt="Apple"
                width={24}
                height={24}
              />
              <span className="ml-2">Sign in with Apple</span>
            </button>
          </div>

          <p className="flex items-center justify-center mt-6 text-base">
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

      {/* Right Section */}
      <div className="md:w-1/2 relative h-full">
        <Image
          src="/images/bg-admin.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Admin;
