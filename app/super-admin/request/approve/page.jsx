"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import RequestsTable from "@/app/components/request/RenderRequestTable";
import DEFAULT_URL from "@/config";

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state


  const categorizeRequests = (requests) => {
    const approved = requests.filter((request) => request.status.toLowerCase() === 'approved');
    setApprovedRequests(approved);
  };

  const fetchRequestsData = () => {
    try {
      setLoading(true); // Set loading to true when starting data fetching
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
        })
        .finally(() => {
          setLoading(false); // Set loading to false after data fetching is complete
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
    <div className="h-screen flex bg-[#f7f7f7] font-sans">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-[#12372A] animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#12372A] animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#12372A] animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      )}
      <div>
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex-grow bg-[#FBFADA] px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">Approved Requests</h2>
          <div className="lg:w-full w-1/4">
            {loading ? (
              <div className="flex items-center justify-center h-48">
              
              </div>
            ) : (
              <RequestsTable data={approvedRequests} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;