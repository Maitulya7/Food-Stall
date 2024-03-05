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
  const [loading, setLoading] = useState(true); // Add loading state

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
        }).finally(() => {
          setLoading(false); 
        });;
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
    <div className="h-screen flex font-sans">
    {loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce [animation-delay:.7s]"></div>
          <div class="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce [animation-delay:.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-[#1e2022] animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
    )}
    <div>
      <LeftNavbarSuperAdmin />
    </div>
    <div className="flex flex-col w-full h-full">
      <div className="flex-grow bg-[#f7f7f7] px-6 py-6">
        <h2 className="text-lg font-semibold mb-4">Pending Request</h2>
        <div className="lg:w-full w-1/4">
          {loading ? (
            <div className="flex items-center justify-center h-48">
            
            </div>
          ) : (
            <RequestsTable
            data={pendingRequests}
            handleApprove={handleApprove}
            handleReject={handleReject}
          />
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Requests;


