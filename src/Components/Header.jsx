import { IoSearchSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logout } from "@/Store/Slices/authSlice";
import Cookies from "js-cookie";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const cartLength = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    Cookies.remove("cart");
    dispatch(logout()); // Dispatch logout action
    setIsDropdownOpen(false); // Close dropdown menu
    navigate("/eShop/login"); // Redirect
    window.location.reload();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="py-6 lg:px-6 px-2">
      <div className="container max-w-[1750px] m-auto flex justify-between items-center gap-[40px]">
        <div className="logo flex gap-4">
          <button className="md:hidden text-[32px]" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
          <Link className="text-[32px] font-bold" to={"/eShop/"}>
            SHOP.CO
          </Link>
        </div>

        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"
            onClick={closeMenu}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full bg-white z-20 w-[80%] flex flex-col items-center justify-center transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:flex md:gap-6 md:bg-transparent md:flex-row md:w-auto md:h-auto md:translate-x-0`}
        >
          <ul className="flex flex-col gap-6 text-xl md:flex-row md:text-base">
            <li>
              <Link
                to="/eShop/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/eShop/products"
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/eShop/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/eShop/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="search-bar hidden items-center bg-[#F0F0F0] py-3 px-4 gap-3 rounded-[62px] flex-grow md:flex">
          <button>
            <IoSearchSharp className="text-black/40 text-[24px]" />
          </button>
          <input
            type="text"
            placeholder="Search for products"
            className="bg-[#F0F0F0] focus:outline-none w-full"
          />
        </div>

        <div className="buttons flex gap-[14px] text-[24px] items-center">
          <button onClick={toggleSearchBar}>
            {isSearchOpen ? (
              <RiCloseLargeFill className="flex md:hidden" />
            ) : (
              <IoSearchSharp className="flex md:hidden" />
            )}
          </button>
          <Link className="relative" to={"/eShop/cart"}>
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[12px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartLength}
              </span>
            )}
            <GrCart className="hover:text-black/60 transition-all duration-300" />
          </Link>
          <div className="relative flex items-center">
            <button onClick={toggleDropdown}>
              {user?.image ? (
                <img
                  src={user.image}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
              ) : (
                <Link to={"/eShop/login"}>
                  <FaRegUserCircle className="hover:text-black/60 transition-all duration-300" />
                </Link>
              )}
            </button>
            {isDropdownOpen && user && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-black hover:bg-black/60 shadow-lg rounded-md text-white">
                <button
                  className="w-full text-left px-4 py-2 transition-all duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="flex items-center bg-[#F0F0F0] py-3 px-4 gap-3 rounded-[62px] mt-4 md:hidden">
          <button onClick={toggleSearchBar}>
            <IoSearchSharp className="text-black/40 text-[24px]" />
          </button>
          <input
            type="text"
            placeholder="Search for products"
            className="bg-[#F0F0F0] focus:outline-none w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
