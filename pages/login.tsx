import Link from "next/link";
import React from "react";
import LoginLogo from "../assets/icons/login logo.svg";
import Google from "../assets/icons/login google.svg";
import Face from "../assets/icons/face.svg";
import Apple from "../assets/icons/apple.png";
import LoginImage from "../assets/images/login img.png";

const login = () => {
  return (
    <div className=" p-[104px] bg-white ">
      <div className=" flex justify-between items-start mx-auto max-w-[1440px]">
        <div className="">
          <img className="w-[120px]" src={LoginLogo.src} alt="" />
          <h1
            className="text-black text-4xl
         font-bold pb-4 pt-14"
          >
            Login
          </h1>
          <p className="opacity-70 ">Login to access your Golobe account</p>
          <form className="flex gap-6 pt-12 flex-col">
            <div className="w-[512px] p-3 relative rounded border border-border ">
              <label
                className=" absolute bg-white text-sm left-4 -top-3"
                htmlFor="from"
              >
                Email
              </label>
              <input
                className="w-full  outline-none"
                placeholder="Dawoodsulaimon@gmail.com"
                type="text"
                id="from"
              />
            </div>
            <div className="w-[512px] p-3 relative rounded border border-border ">
              <label
                className=" absolute bg-white text-sm left-4 -top-3"
                htmlFor="from"
              >
                Password
              </label>
              <input
                className="w-full  outline-none"
                placeholder="................."
                type="password"
                id="from"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between  items-center">
                <div className="flex  gap-2">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Remember me</label>
                </div>
                <div>
                  <Link className="text-new-red" href="/forgot-password">
                    Forgot Password
                  </Link>
                </div>
              </div>
            </div>

            <button className="font-semibold text-md p-4 rounded-md text-green-ish bg-l-green">
              Login
            </button>

            <p className="text-center">
              Don't have an account?
              <span>
                <Link className="text-new-red" href="/sign-up">
                  Sign up
                </Link>
              </span>
            </p>
          </form>

          <div className="flex items-center mt-12 gap-2">
            <div className="bg-green-ish opacity-20 h-[0.5px] w-[194px]"></div>
            <p className="opacity-50 text-green-ish">Or login with</p>
            <div className="bg-green-ish opacity-20 h-[0.5px] w-[194px]"></div>
          </div>
          <div className="flex mt-10 items-center gap-4">
            <button className="border w-40 rounded-md px-6 py-4 border-mint-green">
              <img src={Face.src} alt="" />
            </button>
            <button className="border w-40 rounded-md px-6 py-4 border-mint-green">
              <img src={Google.src} alt="" />
            </button>
            <button className="border w-40 rounded-md px-6 py-4 border-mint-green">
              <img src={Apple.src} alt="" />
            </button>
          </div>
        </div>
        <div>
          <img className="h-[816px]" src={LoginImage.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default login;
