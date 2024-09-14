import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

const TopSelling = () => {
  const {
    items: products,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  // Show loading spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <ClipLoader size={50} color={"#000"} loading={isLoading} />
      </div>
    );
  }
  // Show error if any
  if (error) {
    return <div>Error: {error}</div>;
  }
  // Filter and display only new arrivals (e.g., first 5 products)
  const newArrivals = products.slice(82, 87); // Modify this according to your logic for new arrivals

  return (
    <div className="py-6 px-6">
      <div className="container max-w-[1750px] m-auto py-[72px] flex flex-col gap-[55px] items-center">
        <h2 className="text-[48px] font-bold text-center">Top Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mx-auto">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link className="text-center" to={"/eShop/products"}>
          <button className=" font-medium py-[12px] sm:py-[17px] px-[40px] sm:px-[66px] rounded-[50px] sm:rounded-[62px] hover:bg-black hover:text-white transition-all duration-300 border-black/10 border">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
