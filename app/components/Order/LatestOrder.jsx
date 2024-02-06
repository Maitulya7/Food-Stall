"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckCircle,
  faCalendar,
  faUser,
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
      <TableHeader>
        <TableColumn key="name" className="flex gap-2 items-center">
     
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#4caf50" }}
            size="lg"
          />
          Name
        </TableColumn>

        <TableColumn key="category">Category</TableColumn>
        <TableColumn key="Item_Information">
          Item Information <FontAwesomeIcon icon={faCoffee} />
        </TableColumn>
        <TableColumn key="payment">
          Payment <FontAwesomeIcon icon={faCheckCircle} />
        </TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="date">
          Date <FontAwesomeIcon icon={faCalendar} />
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
