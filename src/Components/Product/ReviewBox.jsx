import PropTypes from "prop-types";
import { renderStars } from "../../Utils/function.util";
import { FaCheckCircle } from "react-icons/fa"; // Importing checkmark icon from react-icons

const ReviewBox = ({ review }) => {
  return (
    <div className="border-black/10 border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[20px] w-full">
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center gap-[12px]">
          {renderStars(review.rating)}
          <span className="text-[14px] text-black ms-3">{review.rating}/5</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-[20px] font-bold">{review.reviewerName}</h3>
        {/* Green verification checkmark */}
        <FaCheckCircle className="text-green-500" size={16} />
      </div>
      <p className="text-black/60 leading-[22px]">{`"${review.comment}"`}</p>
      <p className="text-black/60 font-medium">
        Posted On{" "}
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

ReviewBox.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewBox;
