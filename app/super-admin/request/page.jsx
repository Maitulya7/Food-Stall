"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";
import ApproveButton from "@/app/components/request/Approve"; // Import your ApproveButton component
import RejectButton from "@/app/components/request/Reject";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "orange"; // or any color code you prefer
      case "approved":
        return "green";
      case "rejected":
        return "red";
      default:
        return "black"; // default color
    }
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
          `https://food-court-api.as.r.appspot.com/api/v1/admin/approve_request/${requestId}`,
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
          `https://food-court-api.as.r.appspot.com/api/v1/admin/reject_request/${requestId}`,
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

  return (
    <div className="h-screen flex bg-green-100 font-sans">
      <div className="w-64">
        <LeftNavbarSuperAdmin />
      </div>
      <div className="flex flex-col w-full">
        <TopNavbar pageTitle="Request" pageEmoji="📥" />
        <div className="flex-grow bg-green-100 p-6">
          <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-xs">
            <thead>
              <tr>
              <th className="py-2 px-4 text-left bg-green-300 border-b">
                  No
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Email
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Name
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Phone
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Status
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Categories
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Franchise
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Franchise Details
                </th>
                <th className="py-2 px-4 text-left bg-green-300 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {requestsData.map((request, index) => (
                <tr
                  key={request.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{request.email}</td>
                  <td className="py-2 px-4 border-b">
                    {request.first_name} {request.last_name}
                  </td>
                  <td className="py-2 px-4 border-b">{request.phone_number}</td>
                  <td
                    className="py-2 px-4 border-b"
                    style={{ color: getStatusColor(request.status) }}
                  >
                    {request.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {request.type_of_categories.length > 0 && (
                      <Popover trigger="hover" placement="bottom">
                        <PopoverTrigger>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-green-600 text-white text-xs  rounded-md cursor-pointer transition duration-300">
                              View
                            </span>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="p-2">
                            {request.type_of_categories.map(
                              (category, categoryIndex) => (
                                <div key={categoryIndex} className="mb-2">
                                  {category}
                                </div>
                              )
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {request.franchise ? "Yes" : "No"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {request.franchise ? request.franchise_details : "-"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center">
                      <ApproveButton
                        key={`approve_${request.id}`}
                        ApproveRequest={() => handleApprove(request.id)}
                      />
                      <RejectButton
                        key={`reject_${request.id}`}
                        RejectRequest={() => handleReject(request.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requests;
