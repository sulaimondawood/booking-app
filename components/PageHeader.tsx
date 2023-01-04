import flight from "../assets/icons/flight-dark.svg";
// import LoginLogo from "../assets/icons/login logo.svg";
import LoginLogo from "../assets/icons/login logo.svg";
import HotelBook from "../assets/icons/stay-dark.svg";
import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="lg:flex lg:max-w-[1440px] mx-auto lg:justify-between lg:p-8 items-center">
      <div className="lg:flex lg:gap-8">
        <div className="lg:flex lg:gap-2">
          <img src={flight.src} alt="" />
          <Link href="/find-flight" className="font-semibold text-green-ish">
            Find Flight
          </Link>
        </div>
        <div className="lg:flex lg:gap-2">
          <img src={HotelBook.src} alt="" />
          <Link href="/find-stays" className="font-semibold text-green-ish">
            Find Stays
          </Link>
        </div>
      </div>

      <Link href="/">
        <img className="w-[120px]" src={LoginLogo.src} alt="" />
      </Link>

      <div className="lg:flex lg:items-center lg:gap-8">
        <Link className="font-semibold text-green-ish" href="/login">
          Login
        </Link>
        <Link
          className="font-semibold text-white bg-green-ish py-4 px-8 rounded-lg"
          href="/sign-up"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
