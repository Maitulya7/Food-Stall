"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import InputPassword from "../../components/password/InputPassword";
import axios from "axios";
import { useRouter } from "next/navigation";
import DEFAULT_URL from "@/config";

const Admin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 

  const handleLogin = async () => {

    try {
      axios
        .post(`${DEFAULT_URL}/api/v1/admin/login`, {
          admin: {
            email: email,
            password: password,
          },
          client_id: "egp44hMIRaN2k3e6zLlo0svH2HXi944QxHIqLc50CYI",
        })
        .then((res) => {
            console.log(res)
          
          if (res.status == 200) {
            router.push("/super-admin/dashboard");
            localStorage.setItem("access-token", res.data.admin.access_token);
            console.log(res.data.admin.access_token)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="flex  lg:flex-row justify-between h-screen">
        <div className="md:h-screen w-full lg:mt-0  mt-32 lg:w-1/2">
          <div className="flex justify-center mt-12  w-full">
            <div className="flex flex-col w-full p-20">
              <h1 className="text-3xl font-semibold mb-1 ml-2">Admin Login!</h1>
              <p className="text-base mb-8 ml-2">
                Enter your credentials to access your account
              </p>
              <p className="ml-2 mb-1 font-medium text-sm">Email Address</p>
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="ml-2 mb-1 font-medium text-sm">Password</p>
              <InputPassword
                value={password}
                onChangeFunction={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}

              <button
                onClick={handleLogin}
                className="bg-green-900 mt-8 h-12 rounded-lg text-white font-medium w-full"
              >
                Login
              </button>
            
            </div>
          </div>
        </div>

        <div className="block lg:h-screen lg:w-1/2 relative">
          <Image
            src="/images/superAdminLogin.jpg"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
