import React from "react";
import Card from "../assets/images/card.jpg";
const FlightCard = ({ left, top }: { left: string; top: string }) => {
  console.log(left);

  return (
    <div className={`absolute top-[${top}] z-50 left-[${left}]`}>
      <div
        className={`bg-white flex  p-2  gap-2 rounded-md items-center h-12 `}
      >
        <img
          className="w-10 h-10 rounded-md object-cover object-center "
          src={Card.src}
          alt=""
        />
        <div className="flex flex-col  ">
          <h1 className="text-md font-semibold">John Doe</h1>
          <p className="text-sm text-green-ish ">Boarding Pass N'123</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
