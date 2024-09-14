import { useState } from "react";
import PropTypes from "prop-types";

const ProductImagePreview = ({ selectedProduct }) => {
  // State to hold the currently selected image for preview
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct?.thumbnail
  );

  return (
    <div className="flex space-x-4 w-full flex-col-reverse lg:flex-row gap-8 items-center lg:items-start">
      {/* Small images (thumbnails) on the left */}
      <div className="flex lg:flex-col gap-4 flex-wrap">
        {selectedProduct?.images?.length > 0 ? (
          selectedProduct.images.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${selectedProduct.title} - ${index}`}
              onClick={() => setSelectedImage(img)} // Set selected image on click
              className={`w-[116px] sm:w-[152px] lg:h-[152px] object-cover cursor-pointer bg-[#F0F0F0] rounded-[20px] ${
                selectedImage === img ? "border-black border" : ""
              }`}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Large image (selected preview) on the right */}
      <div className="flex-grow">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={selectedProduct?.title}
            className="w-[490px] h-auto object-cover bg-[#F0F0F0] rounded-[20px]"
          />
        ) : (
          <p>No preview available</p>
        )}
      </div>
    </div>
  );
};

ProductImagePreview.propTypes = {
  selectedProduct: PropTypes.object,
};

export default ProductImagePreview;
