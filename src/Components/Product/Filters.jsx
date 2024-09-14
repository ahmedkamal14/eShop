// Filters.js
import PropTypes from "prop-types";
import ReactSlider from "react-slider";
import { FaAngleUp, FaTimes } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItems, setSelectedCat } from "@/Store/Slices/productsSlice";

const Filters = ({ toggleMobileFilters }) => {
  const dispatch = useDispatch();
  const {
    items: products,
    selectedCat,
    categories,
  } = useSelector((state) => state.products);

  const [shownCats, setShownCats] = useState(5);
  const [collapsed, setCollapsed] = useState(false);
  const categoriesRef = useRef(null);
  const [height, setHeight] = useState("auto");

  // State for temporary filter selections (before applying)
  const [tempSelectedCat, setTempSelectedCat] = useState("All Products");
  const [tempMinPrice, setTempMinPrice] = useState(0);
  const [tempMaxPrice, setTempMaxPrice] = useState(500);

  // State to hold the actual applied filter values
  const [filterMinPrice, setFilterMinPrice] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState(500);

  const [showPriceFilter, setShowPriceFilter] = useState(true);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const withinPriceRange =
        product.price >= filterMinPrice && product.price <= filterMaxPrice;
      return selectedCat === "All Products"
        ? withinPriceRange
        : product.category === selectedCat && withinPriceRange;
    });
    dispatch(setSelectedItems(filteredProducts));
  }, [products, selectedCat, filterMinPrice, filterMaxPrice, dispatch]);

  const toggleCollapse = () => {
    if (collapsed) {
      setHeight(`${categoriesRef.current.scrollHeight}px`);
      setTimeout(() => {
        setCollapsed(false);
        setHeight("auto");
      }, 300);
    } else {
      setHeight(`${categoriesRef.current.scrollHeight}px`);
      setTimeout(() => {
        setCollapsed(true);
        setHeight("0");
      }, 10);
    }
  };

  useEffect(() => {
    if (!collapsed) {
      setHeight(`${categoriesRef.current.scrollHeight}px`);
    }
  }, [categories]);

  const togglePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  const applyFilters = () => {
    dispatch(setSelectedCat(tempSelectedCat));
    setFilterMinPrice(tempMinPrice);
    setFilterMaxPrice(tempMaxPrice);
    toggleMobileFilters(); // Close mobile filters after applying
  };

  return (
    <div className="filters border rounded-[20px] md:w-full py-[20px] px-[24px] min-h-[600px] pb-[40px] relative">
      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 text-[20px] lg:hidden"
        onClick={toggleMobileFilters}
      >
        <FaTimes />
      </button>

      <div className="title pb-6 border-b flex justify-between items-center">
        <h1 className="text-[20px] font-bold">Filters</h1>
      </div>

      {/* Categories section */}
      <div className="border-b">
        <div className="header flex justify-between items-center">
          <h1 className="text-[20px] font-bold pt-6 pb-6">Categories</h1>
          <button onClick={toggleCollapse} className="text-[20px]">
            <FaAngleUp
              className={` transition-all duration-300 ${
                collapsed && "rotate-180"
              }`}
            />
          </button>
        </div>

        <div
          ref={categoriesRef}
          className={`overflow-hidden transition-height duration-300 ease-in-out`}
          style={{ height }}
        >
          <ul className={`grid grid-cols-2 gap-8 text-[12px]`}>
            <li
              className={`cursor-pointer px-4 text-center py-3 rounded-[62px] flex justify-center items-center ${
                tempSelectedCat === "All Products"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0]"
              }`}
              onClick={() => setTempSelectedCat("All Products")}
            >
              All Products
            </li>
            {categories.slice(0, shownCats).map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 text-center py-3 rounded-[62px] flex justify-center items-center ${
                  tempSelectedCat === category
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0]"
                }`}
                onClick={() => setTempSelectedCat(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <button
            className="bg-black text-white px-4 py-2 rounded-[20px] mt-6 text-center w-full mb-8"
            onClick={() => setShownCats(shownCats + 6)}
          >
            More
          </button>
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-b">
        <div className="flex justify-between items-center pt-6 pb-6">
          <h1 className="text-[20px] font-bold">Price</h1>
          <button onClick={togglePriceFilter} className="text-[20px]">
            <FaAngleUp
              className={` transition-all duration-300 ${
                !showPriceFilter && "rotate-180"
              }`}
            />
          </button>
        </div>

        {showPriceFilter && (
          <div className="py-6">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
              min={0}
              max={1000}
              value={[tempMinPrice, tempMaxPrice]}
              onChange={([newMin, newMax]) => {
                setTempMinPrice(newMin);
                setTempMaxPrice(newMax);
              }}
            />
            <div className="flex justify-between mt-4">
              <span>Min: ${tempMinPrice}</span>
              <span>Max: ${tempMaxPrice}</span>
            </div>
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      <button
        className="bg-black text-white px-4 py-2 rounded-[20px] mt-6 text-center w-full mb-8"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

Filters.propTypes = {
  toggleMobileFilters: PropTypes.func.isRequired,
};

export default Filters;
