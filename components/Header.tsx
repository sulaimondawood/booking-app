import flight from "../assets/icons/airplane.svg";
import Logo from "../assets/icons/Logoh.svg";
import HotelBook from "../assets/icons/hotel book w.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:flex lg:justify-between lg:p-8 items-center">
      <div className="lg:flex lg:gap-8">
        <div className="lg:flex lg:gap-2">
          <img src={flight.src} alt="" />
          <p className="font-semibold text-white">Find Flight</p>
        </div>
        <div className="lg:flex lg:gap-2">
          <img src={HotelBook.src} alt="" />
          <p className="font-semibold text-white">Find Stays</p>
        </div>
      </div>

      <img src={Logo.src} alt="" />

      <div className="lg:flex lg:items-center lg:gap-8">
        <Link className="font-semibold text-white" href="/login">
          Login
        </Link>
        <Link
          className="font-semibold bg-white py-4 px-8 rounded-lg"
          href="/sign-up"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
