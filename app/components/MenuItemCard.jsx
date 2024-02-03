import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function MenuItemCard({ Category, AvailableItems, TotalItems }) {
  return (
    <Card className="py-4 ml-2">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/Punjabi.png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="pb-2">{Category} Food Menu</p>
        <p className="pb-2">Total Food items: {TotalItems}</p>
        <p className="pb-2">AVailable items:{AvailableItems}</p>
        <button className="bg-green-600 h-8 rounded-lg text-white font-medium w-40">
          Open
        </button>
      </CardHeader>
    </Card>
  );
}
