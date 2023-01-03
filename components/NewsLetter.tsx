import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-news-letter border absolute -top-1/3 left-1/2 -translate-x-1/2  rounded-lg w-fixed-width h-[305px] flex justify-between p-8 items-center ">
      <div className="">
        <h1 className="text-5xl text-green-ish w-[364px] font-bold">
          Subscribe Newsletter
        </h1>
        <h3 className="text-lg pt-6 pb-2 text-green-ish font-bold">
          The Travel
        </h3>
        <p className=" text-green-ish text-md">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <form className="flex gap-4 pt-4  items-center">
          <input
            type="text"
            placeholder="Your email address"
            className=" w-[473px] rounded-tr-lg rounded-tl-lg placeholder:text-sm placeholder:text-black outline-none p-4 bg-white h-[56px]"
          />
          <button className="bg-green-ish text-white rounded-lg h-[56px] px-4">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
