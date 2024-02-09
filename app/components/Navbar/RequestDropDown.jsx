import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function RequestDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Request
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="Approved">Approved</DropdownItem>
        <DropdownItem key="Rejected">Rejected</DropdownItem>
        <DropdownItem key="Pandding">Pandding</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
