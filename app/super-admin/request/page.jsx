"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNavbar from "@/app/components/Navbar/TopNavbar";
import LeftNavbarSuperAdmin from "@/app/components/Navbar/LeftNavbarSuperAdmin";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ApproveButton from "@/app/components/request/Approve"; // Import your ApproveButton component
import RejectButton from "@/app/components/request/Reject";

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchRequestsData =  () => {
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
        }).catch((err)=>{
          console.log(err)
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
          <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200 text-sm">
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
              {requestsData.map((request) => (
                <tr
                  key={request.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="py-2 px-4 border-b">{request.id}</td>
                  <td className="py-2 px-4 border-b">{request.email}</td>
                  <td className="py-2 px-4 border-b">
                    {request.first_name} {request.last_name}
                  </td>
                  <td className="py-2 px-4 border-b">{request.phone_number}</td>
                  <td className="py-2 px-4 border-b">{request.status}</td>
                  <td className="py-2 px-4 border-b">
                    {request.type_of_categories.length > 0 && (
                      <span
                        className="cursor-pointer inline-block px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={() => onOpen()}
                      >
                        View
                      </span>
                    )}
                    <Modal isOpen={isOpen} onClose={onClose} size="lg">
                      <ModalContent className="p-4">
                        <ModalHeader className="text-lg font-semibold">
                          Categories
                        </ModalHeader>
                        <ModalBody>
                          {request.type_of_categories.map((category, index) => (
                            <div key={index} className="mb-2">
                              {category}
                            </div>
                          ))}
                        </ModalBody>
                        <ModalFooter>
                          <Button auto onClick={onClose} color="warning">
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
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
                        ApproveRequest={() => handleApprove(request.id)}
                      />
                      <RejectButton
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
