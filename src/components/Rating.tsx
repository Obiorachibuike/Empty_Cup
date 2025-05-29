// components/Rating.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"; // Filled star
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"; // Outline star
import { faStarHalfAlt as fasStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // Half-filled star

const Rating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStar} className="text-black" /> // Changed to text-black
      );
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStarHalfAlt} className="text-black" /> // Changed to text-black
      );
    } else {
      // Empty star
      stars.push(
        <FontAwesomeIcon key={i} icon={farStar} className="text-gray-300" />
      );
    }
  }

  return (
    <div className="flex items-center space-x-1 mb-4" style={{ padding: '0px 30px' }}> {/* Added inline style for padding */}
      <div className="flex">
        {stars}
      </div>
      <span className="text-sm text-gray-600 font-medium ml-2">
        {rating.toFixed(1)} / {totalStars}
      </span>
    </div>
  );
};

export default Rating;