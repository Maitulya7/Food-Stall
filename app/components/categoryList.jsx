"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import DEFAULT_URL from "@/config";
import { Pagination } from "@nextui-org/pagination";

export default function CategoryList({categoryData , fetchData}) {
 
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryData.slice(indexOfFirstItem, indexOfLastItem);

  const getOldSerialNumber = (index) => {
    return index + 1 + indexOfFirstItem;
  };

  

  const handleDelete = (id) => {
    setSelectedCategoryId(id);
    onOpen();
  };
  const handleDeleteConfirmation = () => {
    try {
      axios
        .delete(
          `${DEFAULT_URL}/api/v1/admin/categories/${selectedCategoryId}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
              "ngrok-skip-browser-warning": true,
            },
          }
        )
        .then((res) => {
          fetchData();
          onClose(); 
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
          onClose(); // Close the modal even if there is an error
        });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  
  

  return (
    <div className="px-6 rounded-lg ">
    <div className=" rounded">
      <table className="w-full text-sm bg-white border border-gray-300 divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left bg-[#1e2022] text-white border-b">ID</th>
            <th className="py-3 px-6 text-left bg-[#1e2022] text-white border-b">Category</th>
            <th className="py-3 px-6 text-left bg-[#1e2022] text-white border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-colors">
           <td className="py-4 px-6 border-b">{getOldSerialNumber(index)}</td>
              <td className="py-4 px-6 border-b">{item.name}</td>
              <td className="py-4 px-6 border-b">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-6">
    {categoryData.length > itemsPerPage && (
       <Pagination
       defaultCurrent={currentPage}
       total={5}
       pageSize={itemsPerPage}
       
       onChange={(page) => setCurrentPage(page)}
        color="default"
        loop showControls
      />
    )}
    </div>
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this category?</p>
        </ModalBody>
        <ModalFooter className="flex gap-2 justify-end">
          <Button color="light" variant="outline" onPress={onClose}>
            Cancel
          </Button>
          <Button color="danger" onPress={handleDeleteConfirmation}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </div>
  
  );
}
