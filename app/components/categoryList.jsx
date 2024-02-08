"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function CategoryList({categoryData , fetchData}) {
 
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  

  const handleDelete = (id) => {
    setSelectedCategoryId(id);
    onOpen();
  };
  const handleDeleteConfirmation = () => {
    try {
      axios
        .delete(
          `https://food-court-api.as.r.appspot.com/api/v1/admin/categories/${selectedCategoryId}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }
        )
        .then((res) => {
          fetchData();
          onClose(); // Close the modal after successful deletion
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
    <div className="p-5 rounded-lg">
    <div className="overflow-x-auto rounded">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left bg-green-300 border-b">ID</th>
            <th className="py-3 px-6 text-left bg-green-300 border-b">Category</th>
            <th className="py-3 px-6 text-left bg-green-300 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-colors">
              <td className="py-4 px-6 border-b">{index + 1}</td>
              <td className="py-4 px-6 border-b">{item.name}</td>
              <td className="py-4 px-6 border-b">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
