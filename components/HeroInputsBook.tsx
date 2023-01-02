import React from "react";
import Bed from "../assets/icons/bed b.svg";
import plane from "../assets/icons/aitplane b.svg";
import FromInput from "./FromInput";
const HeroInputsBook = () => {
  return (
    <div className="bg-white absolute inset-x-20 p-8 -bottom-40 shadow-form rounded-2xl w-[1232px] h-[272px]">
      <div className="flex items-center gap-14">
        <button className="flex gap-2 items-center">
          <img src={plane.src} alt="" />
          <p className="font-semibold text-base leading-5 text-green-ish ">
            Flights
          </p>
        </button>
        <button className="flex gap-2 items-center">
          <img src={Bed.src} alt="" />
          <p className="font-semibold text-base leading-5 text-green-ish ">
            Stays
          </p>
        </button>
      </div>
      <div className="mt-12">
        <FromInput />
      </div>
    </div>
  );
};

export default HeroInputsBook;
