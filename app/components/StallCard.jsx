import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="py-4 m-2">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/Domino.png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <button className="bg-green-900 h-8 rounded-lg text-white font-medium w-full">
          View
        </button>
      </CardHeader>
    </Card>
  );
}
