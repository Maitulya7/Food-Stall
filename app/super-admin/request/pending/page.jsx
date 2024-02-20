"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import RequestsTable from "@/app/components/request/RenderRequestTable";
import DEFAULT_URL from "@/config";

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  const categorizeRequests = (requests) => {
    const pending = requests.filter(
      (request) => request.status.toLowerCase() === "pending"
    );
    setPendingRequests(pending);
  };

  const fetchRequestsData = () => {
    try {
      axios
        .get(`${DEFAULT_URL}/api/v1/admin/requests`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
            "ngrok-skip-browser-warning": true,
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
          `${DEFAULT_URL}/api/v1/admin/approve_request/${requestId}`,
          {},
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

  const handleReject = (requestId) => {
    try {
      axios
        .post(
          `${DEFAULT_URL}/api/v1/admin/reject_request/${requestId}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }
        )
        .then((res) => {
          console.log("Request rejected successfully:", res.data);
          fetchRequestsData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error rejecting request:", error);
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
        <div className="flex-grow bg-green-100 pl-6 pr-6 pt-12">
          <h2 className="text-lg font-semibold mb-4">Pending Requests</h2>

          <RequestsTable
            data={pendingRequests}
            handleApprove={handleApprove}
            handleReject={handleReject}
          />
        </div>
      </div>
    </div>
  );
};

export default Requests;
