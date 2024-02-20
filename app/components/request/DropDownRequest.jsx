import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import the icons you need

const DropDownRequest = () => {
  return (
    <div className="bg-transparent text-center">

    <Dropdown >
      <DropdownTrigger>
        <Button variant="light" className="text-white font-medium bg-green-500 hover:text-green-500">
      
        <FontAwesomeIcon size="lg" icon={faBell}  className="mr-2" />  Request</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="approve">
          <Link href="/super-admin/request/approve">Approve</Link>
        </DropdownItem>
        <DropdownItem key="reject">
        <Link href="/super-admin/request/reject">Reject</Link>
        </DropdownItem>
        <DropdownItem key="pending">
        <Link href="/super-admin/request/pending">Pending</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default DropDownRequest;
