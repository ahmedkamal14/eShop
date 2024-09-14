// functions.util.js

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Utility function to render star ratings
export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  // Add half star if applicable
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return stars;
};
