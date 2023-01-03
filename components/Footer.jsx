import NewsLetter from "./NewsLetter";
import FooterLogo from "../assets/icons/logo footer.svg";
import Inst from "../assets/icons/insta.svg";
import Twitter from "../assets/icons/twitter.svg";
import Facebook from "../assets/icons/facebook.svg";
import You from "../assets/icons/youtube.svg";
const Footer = () => {
  return (
    <div className="bg-mint-green mt-60 relative px-28 pb-16 h-[422px] w-full">
      <NewsLetter />

      {/* footer links */}

      <div className="grid text-green-ish pt-56 justify-center w-fixed-width place-content-center  mx-auto  grid-cols-6">
        <div className="flex flex-col  gap-6">
          <img className="w-[120px]" src={FooterLogo.src} alt="" />
          <div className="flex gap-3 item-center">
            <img src={Facebook.src} alt="" />
            <img src={Twitter.src} alt="" />
            <img src={You.src} alt="" />
            <img src={Inst.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="pb-2 text-md font-bold">Our Destinations</h2>
          <p className="text-sm  text-green-ish">Canada</p>
          <p className="text-sm">Alaksa </p>
          <p className="text-sm">France </p>
          <p className="text-sm">Iceland </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="pb-2 text-md font-bold">Our Actiivites</h2>
          <p className="text-sm  text-green-ish">Nothern Lights</p>
          <p className="text-sm">Cruising and Sailing</p>
          <p className="text-sm">Multi-activities </p>
          <p className="text-sm">Kayaing </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="pb-2 text-md font-bold">Travel Blogs</h2>
          <p className="text-sm  text-green-ish">Bali Travel Guide</p>
          <p className="text-sm">Sri Lanks Travel Guide </p>
          <p className="text-sm">Peru Travel Guide</p>
          <p className="text-sm">Bali Travel Guide </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="pb-2 text-md font-bold">About Us</h2>

          <p className="text-sm">Our Story </p>
          <p className="text-sm">Work with us </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="pb-2 text-md font-bold">Contact Us</h2>
          <p className="text-sm">Our Story </p>
          <p className="text-sm">Work with us </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
