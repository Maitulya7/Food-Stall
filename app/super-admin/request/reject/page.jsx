"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import RequestsTable from "@/app/components/request/RenderRequestTable";
import DEFAULT_URL from "@/config";

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);


  const categorizeRequests = (requests) => {
    const rejected = requests.filter((request) => request.status.toLowerCase() === 'rejected');
    setRejectedRequests(rejected);

  };

  const fetchRequestsData = () => {
    try {
      axios
        .get(`${DEFAULT_URL}/api/v1/admin/requests`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip_browser_warning": true,
          },
        })
        .then((res) => {
          console.log(res);
          const requests = res.data.requests || [];
          setRequestsData(requests);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching requests data:", error);
    }
  };


 

  useEffect(() => {
    fetchRequestsData();
  }, []);

  useEffect(() => {
    categorizeRequests(requestsData);
  }, [requestsData]);

  

  return (
    <div className="h-screen flex bg-green-100 font-sans">
    <div>
      <LeftNavbarSuperAdmin />
    </div>
    <div className="flex flex-col w-full">
      <div className="flex-grow bg-green-100 p-6 pt-12">
    
        <h2 className="text-lg font-semibold mb-4 ">Rejected Requests</h2>
        
        <RequestsTable
          data={rejectedRequests}
         
        />

      </div>
    </div>
  </div>
  );
};

export default Requests;
