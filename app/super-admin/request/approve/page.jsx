"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import RequestsTable from "@/app/components/request/RenderRequestTable";


const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);

  const categorizeRequests = (requests) => {
    const approved = requests.filter((request) => request.status.toLowerCase() === 'approved');

    setApprovedRequests(approved);
  };

  const fetchRequestsData = () => {
    try {
      axios
        .get("https://food-court-api.as.r.appspot.com/api/v1/admin/requests", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
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

  const handleApprove = (requestId) => {
    try {
      axios
        .post(
          "https://food-court-api.as.r.appspot.com/api/v1/admin/requests",
        
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }
        )
        .then((res) => {
          console.log("Request approved successfully:", res.data);
          fetchRequestsData();
        
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error("Error approving request:", error);
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
    <div className="w-64">
      <LeftNavbarSuperAdmin />
    </div>
    <div className="flex flex-col w-full">
      <TopNavbar pageTitle="Request" pageEmoji="📥" />
      <div className="flex-grow bg-green-100 p-6">
        <h2 className="text-lg font-semibold mb-4">Approved Requests</h2>
        
        <RequestsTable
          data={approvedRequests}
          handleApprove={handleApprove}
        />
      </div>
    </div>
  </div>
  );
};

export default Requests;
