const Brands = () => {
  return (
    <div className="bg-black min-h-[122px] flex">
      <div className="container grid max-w-[1750px] mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center px-4 sm:px-6 py-6 justify-items-center gap-8">
        <img
          src="./b1.png"
          alt="Brand 1"
          className="max-h-[60px] object-contain"
        />
        <img
          src="./b2.png"
          alt="Brand 2"
          className="max-h-[60px] object-contain"
        />
        <img
          src="./b3.png"
          alt="Brand 3"
          className="max-h-[60px] object-contain"
        />
        <img
          src="./b4.png"
          alt="Brand 4"
          className="max-h-[60px] object-contain"
        />
        <img
          src="./b5.png"
          alt="Brand 5"
          className="max-h-[60px] object-contain"
        />
      </div>
    </div>
  );
};

export default Brands;
