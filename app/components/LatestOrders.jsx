"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      let json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <div className="m-3">
      <h2 className="font-extrabold text-2xl m-2">Latest Orders</h2>
      <Table
        aria-label="Example table with client side sorting"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
        classNames={{
          table: "min-h-[400px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">Customer Name</TableColumn>
          <TableColumn key="category">Category</TableColumn>
          <TableColumn key="item_info">Item Information</TableColumn>
          <TableColumn key="payment_status" allowsSorting>
            Payment Status
          </TableColumn>
          <TableColumn key="date" allowsSorting>
            Date
          </TableColumn>
        </TableHeader>

        <TableBody
          items={list.items}
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
