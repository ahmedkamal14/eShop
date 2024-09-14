import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-[#F2F0F1] flex">
      <div className="container flex flex-col lg:flex-row justify-between max-w-[1750px] mx-auto">
        <div className="text flex flex-col gap-[20px] md:gap-[31px]  p-[20px] lg:pe-[120px] py-[50px] md:pt-[102px] items-start max-w-full lg:max-w-[50%] ">
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-[40px] sm:leading-[48px] md:leading-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black/60 text-sm sm:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            className="bg-black text-white font-medium py-[12px] sm:py-[17px] px-[40px] sm:px-[66px] rounded-[50px] sm:rounded-[62px] hover:bg-black/80 transition-all duration-300"
            to={"/eShop/products"}
          >
            Shop Now
          </Link>
          <div className="data flex gap-[12px] md:gap-[32px] items-center mt-[10px] sm:mt-[17px]">
            <div className="item">
              <h1 className="number text-[24px] sm:text-[30px] md:text-[40px] font-bold">
                200+
              </h1>
              <p className="desc text-black/60 text-sm">International Brands</p>
            </div>
            <div className="separator w-[2px] h-10 sm:h-16 border-black/10 border"></div>
            <div className="item">
              <h1 className="number text-[24px] sm:text-[30px] md:text-[40px] font-bold">
                2,000+
              </h1>
              <p className="desc text-black/60 text-sm">
                High-Quality Products
              </p>
            </div>
            <div className="separator w-[2px] h-10 sm:h-16 border-black/10 border"></div>
            <div className="item">
              <h1 className="number text-[24px] sm:text-[30px] md:text-[40px] font-bold">
                30,000+
              </h1>
              <p className="desc text-black/60 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className=" flex md:w-[100%] lg:w-[45%]">
          <img src="./landing.png" alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
