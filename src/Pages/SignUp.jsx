import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-[1750px] mx-auto flex items-center justify-between gap-8 -mb-12 pt-6 px-4">
      <div className="img hidden md:flex md:w-[60%]">
        <img src="./signup.png" alt="fashion" />
      </div>
      <div className="form flex flex-col gap-2 w-full md:w-[35%] justify-center">
        <h1 className="text-5xl font-bold">Create an account</h1>
        <p className="text-xl mb-8">Enter your details below</p>
        <form>
          <div className="form-group mb-8">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="pb-2 border-b-2 border-black/20 w-full focus:outline-none"
            />
          </div>
          <div className="form-group mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="pb-2 border-b-2 border-black/20 w-full focus:outline-none"
            />
          </div>
          <div className="form-group mb-8">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="pb-2 border-b-2 border-black/20 w-full focus:outline-none"
            />
          </div>
          <button className="w-full py-4 bg-black rounded-md text-white mb-3 hover:bg-black/60 transition-all duration-300">
            Create Account
          </button>
          <p className="w-full text-center py-5 text-black/50">
            Already have account?{" "}
            <Link
              className=" underline font-semibold text-black"
              to={"/eShop/login"}
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
