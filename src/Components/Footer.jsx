import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] px-6 pt-[140px]">
      <div className="container max-w-[1750px] m-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[40px] border-b-black/10 border-b pb-[49px]">
        <div className="info max-w-[300px] mt-8 lg:mt-0">
          <h1 className="text-[34px] font-bold mb-[25px]">SHOP.CO</h1>
          <p className="text-black/60 mb-[35px]">
            We have clothes that suits your style and which {"you’re"} proud to
            wear. From women to men.
          </p>
          <div className="socials flex gap-3 text-[24px]">
            <FaFacebook className="text-[#1877F2] hover:scale-125 transition-all duration-300" />
            <FaTwitter className="text-[#1DA1F2] hover:scale-125 transition-all duration-300" />
            <LuInstagram className="text-[#C13584] hover:scale-125 transition-all duration-300" />
            <BsGithub className="text-[#333] hover:scale-125 transition-all duration-300" />
          </div>
        </div>
        <div className="links grid grid-cols-2 lg:grid-cols-4 gap-[106px]">
          <div className="single">
            <h1 className="font-medium mb-[25px] tracking-[3px]">COMPANY</h1>
            <ul className="gap-[12px] flex flex-col">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="single">
            <h1 className="font-medium mb-[25px] tracking-[3px]">HELP</h1>
            <ul className="gap-[12px] flex flex-col">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="single">
            <h1 className="font-medium mb-[25px] tracking-[3px]">FAQ</h1>
            <ul className="gap-[12px] flex flex-col">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="single">
            <h1 className="font-medium mb-[25px] tracking-[3px]">RESOURCES</h1>
            <ul className="gap-[12px] flex flex-col">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
