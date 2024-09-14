// AllProducts.js
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "@/Components/Product/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchAllProducts } from "@/Store/Slices/productsSlice";
import { useState, useEffect } from "react";
import Filters from "@/Components/Product/Filters";
import { FaFilter } from "react-icons/fa"; // Import icon for filters button
import { fetchAllCategories } from "@/Store/Slices/productsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const [shown, setShown] = useState(20);
  const [showMobileFilters, setShowMobileFilters] = useState(false); // State to toggle mobile filters

  const {
    selectedItems: displayed,
    isLoading,
    error,
    selectedCat,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCat === "All Products") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, selectedCat]);

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <ClipLoader size={50} color={"#000"} loading={isLoading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-6 px-6">
      <div className="container max-w-[1750px] m-auto py-[20px] flex flex-col lg:flex-row gap-[15px] items-start">
        {/* Mobile Filters Button */}
        <button
          className="lg:hidden bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 mb-6"
          onClick={toggleMobileFilters}
        >
          <FaFilter /> Filters
        </button>

        {/* Filters Section */}
        <div
          className={`fixed top-0 left-0 z-50 bg-white h-full w-full p-4 transition-transform duration-300 lg:static lg:w-[20%] lg:block ${
            showMobileFilters
              ? "translate-x-0"
              : "translate-x-full lg:translate-x-0"
          }`}
        >
          <Filters toggleMobileFilters={toggleMobileFilters} />
          {/* Pass toggle function */}
        </div>

        {/* Products Section */}
        <div className="products flex flex-col w-full lg:w-[80%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[60px] mt-12 mx-auto">
            {displayed.slice(0, shown).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            {shown < displayed.length && (
              <button
                className="bg-black text-white px-6 py-4 rounded-[62px] mt-12"
                onClick={() => setShown(shown + 20)}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
