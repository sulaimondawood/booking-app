import HeroInputsBook from "../components/HeroInputsBook";
import PageHeader from "../components/PageHeader";
import Location from "../assets/images/location.png";

import F1 from "../assets/images/f1.png";
import F2 from "../assets/images/f2.png";
import F3 from "../assets/images/f3.png";
import F4 from "../assets/images/f4.png";

import Card from "../assets/images/card.jpg";

import FlightCard from "../components/FlightCard";

export default function Flight() {
  return (
    <main className="">
      <PageHeader />
      <div className="h-flight-height relative bg-center bg-cover  bg-no-repeat w-full bg-flight-hero pt-20 pl-32">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-5xl w-[440px] leading-[56px] text-white font-bold">
            Make your travel whishlist, we’ll do the rest
          </h1>
        </div>
        <HeroInputsBook text={true} />
      </div>
      <div className=" pt-[274px]">
        <div className="max-w-[1440px] px-24 mx-auto">
          <div className="flex mb-10  flex-col lg:flex-row lg:items-center lg:justify-between  ">
            <div className="flex-col flex">
              <h1 className="text-3xl font-semibold">
                Let's go places together
              </h1>
              <p className="text-lg opacity-75 pt-4 leading-5">
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </div>
            <button className="text-green-ish py-3 p-4 font-medium border-l-green border rounded-md ">
              See all
            </button>
          </div>
        </div>
        <div className="bg-mint-green relative h-[486px]  ">
          <img className="px-[230px]" src={Location.src} alt="" />
          <div className={`absolute top-[90px] z-50 left-[380px]`}>
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
          <div className={`absolute top-[290px] z-50 left-[500px]`}>
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
          <div className={`absolute top-[280px] z-50 left-[870px]`}>
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
          <div className={`absolute top-[260px] z-50 left-[1200px]`}>
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
          <div className={`absolute top-[120px] z-50 left-[1060px]`}>
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
        </div>
      </div>

      {/* slddlldj */}
      <div className="max-w-[1440px] py-20 px-24 mx-auto">
        {/* gallery */}

        <div className="flex gap-6 justify-between ">
          <div className="bg-mint-green  flex-1 p-6 rounded-3xl">
            <div className="flex justify-between items-center">
              <h1 className="text-green-ish text-4xl w-[363px]">
                Backpacking Sri Lanka
              </h1>
              <div className="flex flex-col bg-white rounded-md p-2 gap-2">
                <p className="text-green-ish">From</p>
                <p className="text-green-ish font-semibold text-2xl">$700</p>
              </div>
            </div>
            <p className="text-green-ish pt-6 pb-24">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>

            <button className="text-green-ish bg-white w-full py-4 rounded">
              Book Flight
            </button>
          </div>
          <div className="flex-1 gap-6 grid grid-cols-2">
            <img className="w-[318px] h-[200px]" src={F1.src} alt="" />
            <img src={F2.src} alt="" className="w-[318px] h-[200px]" />
            <img src={F3.src} alt="" className="w-[318px] h-[200px]" />
            <img src={F4.src} alt="" className="w-[318px] h-[200px]" />
          </div>
        </div>
      </div>
      {/* slddlldj */}
      <div className="max-w-[1440px] py-20 px-24 mx-auto">
        <div className="flex mb-10  flex-col lg:flex-row lg:items-center lg:justify-between  ">
          <div className="flex-col flex">
            <h1 className="text-3xl font-semibold">Let's go places together</h1>
            <p className="text-lg opacity-75 pt-4 max-w-[1000px] leading-5">
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          <button className="text-green-ish py-3 p-4 font-medium border-l-green border rounded-md ">
            See all
          </button>
        </div>

        {/* gallery */}

        <div className="flex gap-6 justify-between ">
          <div className="bg-mint-green  flex-1 p-6 rounded-3xl">
            <div className="flex justify-between items-center">
              <h1 className="text-green-ish text-4xl w-[363px]">
                Backpacking Sri Lanka
              </h1>
              <div className="flex flex-col bg-white rounded-md p-2 gap-2">
                <p className="text-green-ish">From</p>
                <p className="text-green-ish font-semibold text-2xl">$700</p>
              </div>
            </div>
            <p className="text-green-ish pt-6 pb-24">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>

            <button className="text-green-ish bg-white w-full py-4 rounded">
              Book Flight
            </button>
          </div>
          <div className="flex-1 gap-6 grid grid-cols-2">
            <img className="w-[318px] h-[200px]" src={F1.src} alt="" />
            <img src={F2.src} alt="" className="w-[318px] h-[200px]" />
            <img src={F3.src} alt="" className="w-[318px] h-[200px]" />
            <img src={F4.src} alt="" className="w-[318px] h-[200px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
