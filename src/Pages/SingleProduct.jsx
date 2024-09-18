import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/Store/Slices/productsSlice";
import { addToCart } from "@/Store/Slices/cartSlice";
import ProductImagePreview from "../Components/Product/ProductImagePreview";
import { renderStars } from "../Utils/function.util";
import ReviewBox from "@/Components/Product/ReviewBox";
import ProductCard from "@/Components/Product/ProductCard";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";


const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    selectedProduct,
    isLoading,
    error,
    items: products,
  } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium"); // Set default size
  const [selectedTab, setSelectedTab] = useState("reviews"); // Set default tab to 'details'
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.category === selectedProduct.category
      );
      setSimilarProducts(filteredProducts);
    }
  }, [products, selectedProduct]);

  const handleAddToCart = () => {
    dispatch(addToCart({ selectedProduct, quantity, selectedSize })); // Pass selectedSize
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

  if (!selectedProduct) {
    return <div>No product found</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Set selected size on click
  };

  const renderTabContent = () => {
    if (selectedTab === "details") {
      return (
        <div className="flex flex-col gap-[34px] mt-[34px]">
          <h1 className="title text-[24px] font-bold">Details</h1>

          <div>{selectedProduct.description}</div>
        </div>
      );
    } else if (selectedTab === "reviews") {
      return (
        <div className="flex flex-col gap-[34px] mt-[34px]">
          <h1 className="title text-[24px] font-bold">
            All Reviews ({selectedProduct?.reviews?.length || 0})
          </h1>
          {
            // Render reviews if available
            selectedProduct?.reviews?.length === 0 ? (
              <div>No reviews available</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full">
                {selectedProduct?.reviews?.map((review) => (
                  <ReviewBox key={review.id} review={review} />
                ))}
              </div>
            )
          }
        </div>
      );
    }
  };

  return (
    <div className="py-6 px-6">
      <div className="container max-w-[1750px] m-auto flex flex-col gap-[55px]">
        <div className="product flex gap-[120px] flex-col lg:flex-row items-center">
          <ProductImagePreview selectedProduct={selectedProduct} />
          <div className="data flex flex-col gap-[14px] w-full lg:w-[70%]">
            <h1 className="text-[40px] font-bold">{selectedProduct.title}</h1>
            <div className="flex items-center gap-1 text-yellow-500">
              {renderStars(selectedProduct.rating)}
              <span className="text-[14px] text-black ms-3">
                {selectedProduct.rating}/5
              </span>
            </div>
            <div className="prices text-[32px] font-bold flex items-center gap-[12px]">
              <span className="price">
                ${Math.round(selectedProduct?.price)}
              </span>
              <span className="oldPrice text-black/30 line-through me-[16px]">
                $
                {Math.round(
                  selectedProduct?.price +
                    selectedProduct?.price *
                      (selectedProduct?.discountPercentage / 100)
                )}
              </span>
              <span className="bg-[#FF3333]/10 py-[6px] px-[14px] rounded-[62px] text-[12px] font-medium text-[#FF3333]">
                -{Math.round(selectedProduct?.discountPercentage)}%
              </span>
            </div>

            <div className="desc mt-[11px]">
              <p className="text-[16px] text-black/60 pb-6 border-b">
                {selectedProduct.description}
              </p>
            </div>

            {/* Sizes */}
            <div className="sizes flex flex-col gap-[15px] pb-6 border-b">
              <h3 className="text-black/60">Choose Size</h3>
              <div className="flex gap-[12px]">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)} // Handle size selection
                    className={`py-[12px] px-[24px] rounded-[62px] text-[12px] md:text-[16px] ${
                      selectedSize === size
                        ? "bg-black text-white" // Selected size style
                        : "bg-[#F0F0F0] text-black" // Default style
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
                
            <div className="buying flex gap-[20px] mt-[20px]">
              <div className="quantity flex items-center bg-[#F0F0F0] gap-[37px] py-[14px] px-[20px] rounded-[62px]">
                <button
                  onClick={() => setQuantity(quantity - 1)} // Decrement quantity
                  className="font-bold text-[18px]"
                  disabled={quantity <= 1}
                >
                  <AiOutlineMinus />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)} // Increment quantity
                  className="font-bold text-[18px]"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="addToCart w-full">
                <button
                  onClick={handleAddToCart}
                  className="py-[14px] px-[20px] rounded-[62px] bg-black text-white font-medium w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="info mt-12">
          <div className="titles flex text-black/40 text-[20px] pb-6 border-b justify-around">
            <button
              className={`${
                selectedTab === "details" ? "text-black font-bold" : ""
              }`}
              onClick={() => setSelectedTab("details")}
            >
              Product Details
            </button>
            <button
              className={`${
                selectedTab === "reviews" ? "text-black font-bold" : ""
              }`}
              onClick={() => setSelectedTab("reviews")}
            >
              Rating and Reviews
            </button>
          </div>

          {/* Render the content based on selected tab */}
          <div className="tab-content">{renderTabContent()}</div>
        </div>

        {/* Similar Products */}
        <div className="similarProducts mt-[40px] flex flex-col items-center">
          <h1 className="title text-[32px] lg:text-[48px] font-bold text-center">
            You might also like
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mx-auto mt-12">
            {similarProducts.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
