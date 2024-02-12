"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckCircle,
  faCalendar,
  faUser,
  faList,
  faInfoCircle,
  faMoneyBill,
  faHourglass
} from "@fortawesome/free-solid-svg-icons";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { users } from "./data";

export default function LatestOrder() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <Table
    className="text-sm"
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="success"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader >
        <TableColumn key="name">
     
          <FontAwesomeIcon
          className="pl-2"
            icon={faUser}
            style={{ color: "#3A5B22" }}
            size="lg"
          />
          <span className="pl-2">Name</span>
        </TableColumn>

        <TableColumn key="category">
     
     <FontAwesomeIcon
     className="pl-2"
       icon={faList}
       style={{ color: "#3A5B22" }}
       size="lg"
     />
     <span className="pl-2">category</span>
   </TableColumn>
   <TableColumn key="Item_Information">
     
     <FontAwesomeIcon
     className="pl-2"
       icon={faInfoCircle}
       style={{ color: "#3A5B22" }}
       size="lg"
     />
     <span className="pl-2">Item_Information</span>
   </TableColumn>
   <TableColumn key="payment">
     
     <FontAwesomeIcon
     className="pl-2"
       icon={faMoneyBill}
       style={{ color: "#3A5B22" }}
       size="lg"
     />
     <span className="pl-2">payment</span>
   </TableColumn>
   <TableColumn key="status">
     
     <FontAwesomeIcon
     className="pl-2"
       icon={faHourglass}
       style={{ color: "#3A5B22" }}
       size="lg"
     />
     <span className="pl-2">status</span>
   </TableColumn>

   <TableColumn key="date">
     
     <FontAwesomeIcon
     className="pl-2"
       icon={faCalendar}
       style={{ color: "#3A5B22" }}
       size="lg"
     />
     <span className="pl-2">Date</span>
   </TableColumn>
        
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow  key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
