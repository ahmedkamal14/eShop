import { MdOutlineMailOutline } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div className="w-full min-h-[177px] px-4 translate-y-1/2">
      <div className="container max-w-[1750px] m-auto flex flex-col lg:flex-row justify-between items-center bg-black h-full px-[37px] lg:px-[64px] py-[32px] lg:py-[42px] rounded-[20px] gap-[32px]">
        <div className="text text-white text-[32px] md:text-[40px] font-bold max-w-[550px]">
          <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className="form flex flex-col gap-[14px] w-full lg:w-[400px]">
          <div className="input flex gap-3 items-center bg-white px-[15px] py-3 rounded-[62px] w-full">
            <MdOutlineMailOutline className="text-black/40 text-[24px]" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 focus:outline-none"
            />
          </div>
          <button className="font-medium bg-white py-3 w-full rounded-[62px] text-center">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
