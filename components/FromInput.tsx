import React from "react";
import Send from "../assets/icons/Send.svg";

const FromInput = () => {
  return (
    <div className="flex flex-col">
      <form>
        <div className="flex lg:flex-row h-12 lg:gap-6 ">
          <div className="p-3 w-[324px] relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              From - To
            </label>
            <input
              className="w-full align-bottom h-full outline-none"
              type="text"
              id="from"
            />
          </div>
          <div className="w-[140px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Trip
            </label>
            <input
              className="w-full h-full outline-none"
              type="text"
              id="from"
            />
          </div>
          <div className="w-[324px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Depart - Return
            </label>
            <input className="w-full h-14 outline-none" type="text" id="from" />
          </div>
          <div className="w-[324px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Passenger - Class
            </label>
            <input className="w-full h-14 outline-none" type="text" id="from" />
          </div>
        </div>
      </form>

      <div className="flex items-center  self-end gap-7 py-8">
        <p className="text-md font-medium"> + Add Promo Code</p>
        <button className="flex gap-1 items-center py-4 px-8 bg-l-green text-green-ish">
          <img src={Send.src} alt="" />
          <p className="text-md font-medium">Show Flights</p>
        </button>
      </div>
    </div>
  );
};

export default FromInput;
