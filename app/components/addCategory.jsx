"use client"
import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import DEFAULT_URL from "@/config";
import Swal from 'sweetalert2';

export default function AddCategory({fetchData}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [category, setCategory] = useState("");

  const handleCategory = () => {
    const formData = new FormData();
    formData.append("category[name]", category);

    axios
      .post(
        `${DEFAULT_URL}/api/v1/admin/categories`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        fetchData();
        Swal.fire({
          icon: 'success',
          title: 'Category Added!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        onClose();
      });
  };



  return (
    <>
       <button   onClick={onOpen}
  class="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-[#52616b] bg-[#12372A] group hover:bg-[#12372A] active:bg-[#12372A] active:border-[#12372A]"
>
  <span
    class="text-[#FBFADA] font-semibold ml-8 transform group-hover:block transition-all duration-300"
    >Add Item</span>
  <span
    class="absolute right-0 h-full w-10 rounded-lg bg-[#12372A] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
    <svg
      class="svg w-8 text-[#FBFADA]"
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
    </svg>
  </span>
</button>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="p-5">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Category</ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Category"
                  placeholder="Enter Category Name"
                  variant="bordered"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <Button
                  onClick={handleCategory}
                  className="bg-[#52616b] text-white font-medium"
                >
                  Submit
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
