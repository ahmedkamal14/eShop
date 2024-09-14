import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux"; // Import useDispatch
import { login } from "@/Store/Slices/authSlice"; // Import login thunk action

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Dispatch login action
      const resultAction = await dispatch(login({ username, password }));
      const user = resultAction.payload;

      if (user) {
        // Redirect to home page upon successful login
        navigate("/eShop/");
      }
    } catch (err) {
      // Handle login error
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[1750px] mx-auto flex items-center justify-between gap-8 -mb-12 pt-6 px-4">
      <div className="img hidden md:flex md:w-[60%]">
        <img src="./signup.png" alt="fashion" />
      </div>
      <div className="form flex flex-col gap-2 w-full md:w-[35%] justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold">Log In to SHOP.CO</h1>
        <p className="text-lg lg:text-xl mb-8">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-8">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pb-2 border-b-2 border-black/20 w-full focus:outline-none"
              required
            />
          </div>
          <div className="form-group mb-8">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pb-2 border-b-2 border-black/20 w-full focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between items-center ">
            <button
              type="submit"
              className="w-1/3 py-4 bg-black rounded-md text-white mb-3 hover:bg-black/60 transition-all duration-300"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Logging In..." : "Log IN"} {/* Show loader text */}
            </button>
            <button className="hover:text-black/60 transition-all duration-300 font-medium">
              Forgot Password?
            </button>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}{" "}
          {/* Show error message */}
          <p className="text-black/50 w-full text-center py-8 font-bold">Or</p>
          <div className="w-full text-center">
            <Link to={"/eShop/signup"} className="font-bold text-xl underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
