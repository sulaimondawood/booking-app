import type { NextPage } from "next";
import Head from "next/head";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroInputsBook from "../components/HeroInputsBook";

import Rec from "../assets/images/Rectangle 40.png";
import Rec1 from "../assets/images/Rectangle 41.png";
import Send from "../assets/icons/Send.svg";
import ReviewCard from "../components/ReviewCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Swiper

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-no-repeat bg-hero h-hero rounded-2xl relative  lg:mx-auto lg:w-[1380px] lg:mt-[30px] ">
          <Header />
          <div className="pt-14">
            <h1 className="text-5xl text-center text-white font-bold">
              Helping Others
            </h1>
            <h1 className="text-[80px] text-center text-white  font-bold">
              Live & Travel
            </h1>
            <p className="text-center text-xl text-white font-semibold">
              Special offers to suit your plan
            </p>
          </div>
          <HeroInputsBook text={false} />
          {/* ?plan your trip */}
        </div>

        <div className="mt-[245px] lg:w-[1232px] mx-auto ">
          <div className="flex mb-10  flex-col lg:flex-row lg:items-center lg:justify-between  ">
            <div className="flex-col flex">
              <h1 className="text-3xl font-semibold">Plan your perfect trip</h1>
              <p className="text-lg opacity-75 pt-4 leading-5">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <button className="text-green-ish py-3 p-4 font-medium border-l-green border rounded-md ">
              See more places
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        {/* Flight and booking  */}
        <div className=" lg:w-[1232px] mx-auto mt-24 mb-14">
          <div className="flex gap-6 items-center">
            <div className="bg-hero-card2 rounded-3xl w-[604px] h-[559px] object-cover object-center">
              <h1 className="font-semibold text-center pt-[372px] text-5xl text-white">
                Flight
              </h1>
              <p className="pt-2 w-[389px] mx-auto text-white text-center pb-3">
                Search Flights & Places Hire to our most popular destinations
              </p>
              <button className="flex gap-1 items-center py-4 px-8 bg-l-green mx-auto text-green-ish">
                <img src={Send.src} alt="" />
                <p className="text-md font-medium">Show Flights</p>
              </button>
            </div>
            <div className="bg-hero-card rounded-3xl w-[604px] h-[559px] object-cover object-center">
              <h1 className="font-semibold text-center pt-[372px] text-5xl text-white">
                Hotels
              </h1>
              <p className="pt-2 w-[389px] mx-auto text-white text-center pb-3">
                Search hotels & Places Hire to our most popular destinations
              </p>
              <button className="flex gap-1 mx-auto items-center py-4 px-8 bg-l-green text-green-ish">
                <img src={Send.src} alt="" />
                <p className="text-md font-medium">Show Flights</p>
              </button>
            </div>
          </div>
        </div>

        {/* Review section? */}

        <div className="">
          <div className="flex mb-10 lg:w-[1232px] mx-auto  flex-col lg:flex-row lg:items-center lg:justify-between  ">
            <div className="flex-col flex">
              <h1 className="text-3xl font-semibold">Reviews</h1>
              <p className="text-lg opacity-75 pt-4 leading-5">
                What people say about globe facilities
              </p>
            </div>
            <button className="text-green-ish py-3 p-4 font-medium border-l-green border rounded-md ">
              See all
            </button>
          </div>

          {/* <Swiper spaceBetween={50} slidesPerView={3}> */}
          <div
            className="flex mb-24  gap-12  justify-center mx-auto
            "
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
          {/* </Swiper> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
