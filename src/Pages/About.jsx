import { CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { CiGift } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Features from "@/Components/Features";

const About = () => {
  const feat = [
    {
      Number: "10.5k",
      title: "Sallers active our site",
      icon: <CiShop />,
    },
    {
      Number: "33k",
      title: "Mopnthly Produduct Sale",
      icon: <AiOutlineDollar />,
    },
    {
      Number: "45.5k",
      title: "Customer active in our site",
      icon: <CiGift />,
    },
    {
      Number: "25k",
      title: "Anual gross sale in our site",
      icon: <FaSackDollar />,
    },
  ];
  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div className="nav">
        <p className="text-black/50">
          <Link to={"/eShop/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">About</span>
        </p>
      </div>

      <div className="content flex flex-col-reverse md:flex-row justify-between items-center mt-12 gap-8    ">
        <div className="text w-full md:w-[40%]">
          <h1 className="md:text-7xl text-5xl font-semibold mb-8">Our Story</h1>
          <p className="text-xl leading-8 mb-8">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-xl leading-8 mb-8">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="img mb-8">
          <img src="./about.png" alt="Shopify" />
        </div>
      </div>

      <div className="numbers py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center gap-8">
          {feat.map((f, i) => (
            <div
              className="flex flex-col items-center gap-4 border border-black rounded-md px-10 py-10 hover:bg-red-500 hover:text-white transition-all duration-300"
              key={i}
            >
              <div className="icon bg-black text-white p-5 rounded-full text-5xl">
                {f.icon}
              </div>
              <h2 className="text-4xl font-bold">{f.Number}</h2>
              <p className="text-xl ">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
