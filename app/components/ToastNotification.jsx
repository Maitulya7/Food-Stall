"use client"
import  { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
  useEffect(() => {
    toast.success("Welcome to the Dashboard!", {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  return <ToastContainer />;
};

export default ToastNotification;
