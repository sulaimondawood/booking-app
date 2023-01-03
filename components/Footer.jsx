import NewsLetter from "../components/NewsLetter";
import FooterLogo from "../assets/icons/logo footer.svg";
import Inst from "../assets/icons/insta.svg";
import Twitter from "../assets/icons/twitter.svg";
import Facebook from "../assets/icons/facebook.svg";
import You from "../assets/icons/youtube.svg";
const Footer = () => {
  return (
    <div className="bg-mint-green mt-60 relative h-[422px] w-full">
      <NewsLetter />

      {/* footer links */}

      <div className="grid text-green-ish grid-cols-6">
        <div className="flex flex-col pt-56 gap-6">
          <img className="w-[120px]" src={FooterLogo.src} alt="" />
          <div className="flex gap-3 item-center">
            <img src={Facebook.src} alt="" />
            <img src={Twitter.src} alt="" />
            <img src={You.src} alt="" />
            <img src={Inst.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-3 "></div>
      </div>
    </div>
  );
};

export default Footer;
