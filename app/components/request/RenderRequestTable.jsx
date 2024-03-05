"use client"
import React from "react";
import ApproveButton from "@/app/components/request/Approve";
import RejectButton from "@/app/components/request/Reject";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";

const RequestsTable = ({ data, handleApprove, handleReject }) => {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const getOldSerialNumber = (index) => {
    return index + 1 + indexOfFirstItem;
  };


  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "orange"; 
      case "approved":
        return "green";
      case "rejected":
        return "red";
      default:
        return "black";
    }
  };
  const showActionHeader =
    data.some(
      (request) =>
        request.status.toLowerCase() !== "approved" &&
        request.status.toLowerCase() !== "rejected"
    );
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
  return (
    <>
    <table className="lg:w-full  bg-white border border-gray-300 divide-y divide-gray-200 text-xs">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">No</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Email</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Name</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Stall Name</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Stall Logo</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Phone</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Status</th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">
            Categories
          </th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">
            Franchise
          </th>
          <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">
            Franchise Details
          </th>
           {showActionHeader && (
            <th className="py-2 px-4 text-left bg-[#12372A]  text-white border-b">Action</th>
          )}
        </tr>
      </thead>
      <tbody >
      {currentItems.map((request, index) => (
          <tr key={request.id} className="hover:bg-[#ADBC9F] transition-colors">
            <td className="py-2 px-4 border-b">{getOldSerialNumber(index)}</td>
            <td className="py-2 px-4 border-b">{request.email}</td>
            <td className="py-2 px-4 border-b">
              {request.first_name} {request.last_name}
            </td>
            <td className="py-2 px-4 border-b">
              {request.stall_name} 
            </td>
            <td className="py-2 px-4 border-b">
              {request.stall_logo}
            </td>
            <td className="py-2 px-4 border-b">{request.phone_number}</td>
            <td
              className="py-2 px-4 border-b"
              style={{ color: getStatusColor(request.status), fontWeight:"bold"}}
            >
            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}

            </td>
            <td className="py-2 px-4 border-b">
              {request.type_of_categories.length > 0 && (
                <Popover backdrop="opaque" trigger="hover" placement="bottom">
                  <PopoverTrigger>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-[#12372A] font-medium  text-white text-xs rounded-md cursor-pointer transition duration-300">
                        View
                      </span>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                  
                  >
                    <div className="p-2">
                      {request.type_of_categories.map(
                        (category, categoryIndex) => (
                          <div key={categoryIndex} className="mb-2 text-center  bg-[#12372A] p-2  text-white rounded font-medium">
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
            {request.status.toLowerCase() !== "approved" &&
            request.status.toLowerCase() !== "rejected" ? (
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
            ) : null}
          </tr>
          
        ))}
       
      </tbody>
      
    </table>
    <div className="py-6">
    {data.length > itemsPerPage && (
       <Pagination
       defaultCurrent={currentPage}
       total={5}
       pageSize={itemsPerPage}
       classNames={{
        cursor:
          "bg-[#12372A] text-[#FBFADA]",
      }}
       onChange={(page) => setCurrentPage(page)}
        color="default"
        loop showControls
      />
    )}
    </div>
    
    
       </>
  );
};

export default RequestsTable;
