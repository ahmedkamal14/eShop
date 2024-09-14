import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "@/Store/Slices/productsSlice";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import { useEffect, useState } from "react";
import { setSelectedItems, setSelectedCat } from "@/Store/Slices/productsSlice";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    categories,
    isLoading,
    error,
    items: products,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      // Select 4 categories
      const selected = categories.slice(19, 23); // Adjust as needed
      setSelectedCategories(selected.map((category) => category.split("-")[1]));
    }
  }, [categories]);

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

  const handleClick = (cat) => {
    // Filter products by category
    const filteredProducts = products.filter(
      (product) => product.category === `womens-${cat}`
    );
    dispatch(setSelectedItems(filteredProducts));

    // Set the selected category
    dispatch(setSelectedCat(cat));

    // Navigate to the category page
    navigate(`/eShop/products`);
  };

  return (
    <div className="py-6 px-4 lg:px-6 xl:px-12">
      <div className="container max-w-[1750px] mx-auto py-6 lg:py-[70px] flex flex-col bg-[#F0F0F0] rounded-[20px] sm:rounded-[40px] px-6 lg:px-[64px] xl:px-[120px]">
        <div className="title col-span-4 mx-auto">
          <h2 className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-center">
            Browse By Category
          </h2>
        </div>

        {/* Render the selected categories with images */}
        <div className="cats w-full grid grid-rows-4 sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 mt-6 sm:mt-[64px] gap-4 sm:gap-[20px]">
          {selectedCategories.map((category, index) => {
            // Define col-span based on the index
            const colSpan =
              index === 0 || index === 3 ? "col-span-1" : "sm:col-span-2";

            return (
              <button
                key={category}
                onClick={() => handleClick(category)}
                className={`flex flex-col gap-2 sm:gap-[18px] hover:scale-105 transition-all duration-300 bg-white relative h-[200px] sm:h-[300px] rounded-[10px] sm:rounded-[20px] ${colSpan}`}
              >
                <img
                  src={`./${category}.png`}
                  alt={category}
                  className="w-full h-full object-contain rounded-xl absolute bottom-0 right-0"
                />
                <h3 className="text-[20px] sm:text-[24px] lg:text-[36px] font-bold absolute left-[16px] sm:left-[36px] top-[10px] sm:top-[28px] text-black capitalize">
                  {category}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
