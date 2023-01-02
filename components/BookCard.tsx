import React from "react";
import Card from "../assets/images/card.jpg";
const BookCard = () => {
  return (
    <div className="flex gap-4 items-center bg-white shadow-card p-4">
      <img
        className="w-24 h-24 rounded-md object-cover object-center"
        src={Card.src}
        alt=""
      />
      <div className="flex flex-col">
        <p className="opacity-70 text-green-ish"> Istanbul, Turkey</p>
        <p>
          <span className="text-sm text-green-ish">Flights . </span>
          <span className="text-sm text-green-ish">Hotels . </span>
          <span className="text-sm text-green-ish">Resorts </span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
