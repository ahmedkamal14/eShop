import { Link } from "react-router-dom";

const SalesAdd = () => {
  return (
    <div className="flex justify-center items-center w-full py-[9px] bg-black text-[14px] px-2 text-center">
      <p className="text-white">
        Sign up and get 20% off to your first order.
        <Link
          className="font-medium underline hover:text-white/80 transition-all duration-300"
          to={"/eShop/signup"}
        >
          {" "}
          Sign Up Now
        </Link>
      </p>
    </div>
  );
};

export default SalesAdd;
