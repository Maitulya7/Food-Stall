import LeftNavbar from "@/app/components/Navbar/LeftNavbar";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import CustomerItemTable from "@/app/components/customerOrders/orderTable";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";

function Dashboard() {
  
  return (
    <div className="h-screen flex bg-green-100">
      <div className="w-64">
        <LeftNavbar />
      </div>
      <div className="flex flex-col w-full">
        
        <div className="flex-grow bg-green-100 pl-10 pr-10">
          <CustomerItemTable/>
        </div>
      </div>
  
    </div>
  );
}

export default Dashboard;
