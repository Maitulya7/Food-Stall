"use client"
import { useState } from "react";
import { Input } from "@nextui-org/react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DEFAULT_URL from "@/config";
import InputPassword from "@/app/components/password/InputPassword";
import ConfirmPassword from "@/app/components/password/confirmPassword";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            // Call your server API endpoint for forgot password
            const response = await axios.post(
                `${DEFAULT_URL}/api/v1/admin/forgot-password`,
                {
                    email: email,
                }
            );

            if (response.status === 200) {
                toast.success("Password reset instructions sent to your email.", {
                    position: "top-right",
                });

            }
        } catch (error) {
            console.error("Error sending forgot password request:", error);
            toast.error("Failed to send reset password instructions.", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return (
        <>
            <div className="flex justify-center mt-12  w-1/2">
                <div className="flex flex-col w-full p-20">
                    <h1 className="text-3xl font-semibold mb-1 ml-2">Forgot Password</h1>
                    <p className="text-base mb-8 ml-2">
                        Enter your email address to reset your password
                    </p>
                    <div className="flex gap-5 flex-col">

                    <InputPassword
                        isRequired
                        variant="bordered"
                        type="password"
                        label="Password"
                        className="w-full mb-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <ConfirmPassword
                        isRequired
                        variant="bordered"
                        type="password"
                        className="w-full mb-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                        </div>

                    <button
                        onClick={handleForgotPassword}
                        className="bg-[#12372A] mt-8 h-12 rounded-lg text-white font-medium w-full"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ForgotPassword;
