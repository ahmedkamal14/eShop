import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { renderStars } from "../../Utils/function.util";

const ProductCard = ({ product }) => {
  return (
    <Link
      key={product.id}
      className="flex flex-col gap-[18px] w-[150px] sm:w-[170px] md:w-[250px] hover:scale-110 transition-all duration-300"
      to={`/eShop/products/${product.id}`}
    >
      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-full object-cover rounded-2xl mb-4 bg-[#f0eeed]"
      />
      <h3 className="text-[14px] md:text-[20px] font-bold">{product.title}</h3>
      {/* Star Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {renderStars(product.rating)}
        <span className="text-[12px] text-black ms-3">{product.rating}/5</span>
        {/* Pass product rating to render stars */}
      </div>
      <div className="flex gap-[10px] items-center text-[14px] md:text-[24px] font-bold">
        <p>
          ${/* make this value show int only no decimals */}
          {(
            product.price -
            product.price * (product.discountPercentage / 100)
          ).toFixed(0)}
        </p>
        <p className="text-black/40 line-through">${product.price}</p>
        <p className="bg-[#FF3333]/10 py-[6px] px-[14px] rounded-[62px] text-[12px] font-medium text-[#FF3333]">
          -{product.discountPercentage.toFixed(0)}%
        </p>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
