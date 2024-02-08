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

export default function AddCategory({fetchData}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [category, setCategory] = useState("");

  const handleCategory = () => {
    const formData = new FormData();
    formData.append("category[name]", category);

    axios
      .post(
        "https://food-court-api.as.r.appspot.com/api/v1/admin/categories",
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
      <Button onPress={onOpen} className=" bg-[#3A5B22] text-white font-medium">
        Add Category
      </Button>
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
                  className="bg-[#3A5B22] text-white font-medium"
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
