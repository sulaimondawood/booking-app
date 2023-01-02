import React from "react";
import Star from "../assets/icons/star.svg";
import Google from "../assets/icons/google.svg";

import Img from "../assets/images/Rectangle 36.png";

const ReviewCard = () => {
  return (
    <div className="bg-white h-[584px] relative p-6 w-[435px] rounded-3xl shadow-cardReview">
      <h1 className="text-2xl text-green-ish font-bold pb-4 leading-8">
        “A real sense of community, nurtured”
      </h1>
      <p className="text-sm text-green-ish">
        Really appreciate the help and support from the staff during these tough
        times. Shoutout to Katie for ...
      </p>
      <button className="text-green-ish text-sm font-bold flex  justify-end items-end self-end justify-self-end">
        View more
      </button>

      <div className="pt-5">
        <div className="flex gap-3 pb-5">
          <img src={Star.src} alt="" />
          <img src={Star.src} alt="" />
          <img src={Star.src} alt="" />
          <img src={Star.src} alt="" />
          <img src={Star.src} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-green-ish">
        <h1 className="text-sm font-medium ">Dawood</h1>
        <p className="text-xs opacity-50">
          <span>Weave Studio </span>
          <span> - </span>
          <span> Weave Studio</span>
        </p>
        <div className="flex items-center gap-2">
          <img src={Google.src} alt="" />
          <p className="text-xs opacity-50">Google</p>
        </div>
        <img
          className="rounded-lg  w-[377p]
h-[200px] "
          src={Img.src}
          alt=""
        />
      </div>
      <div className="bg-reviewLinear rounded-3xl top-6 left-5 -z-50 h-[584px] w-[435px] absolute "></div>
    </div>
  );
};

export default ReviewCard;