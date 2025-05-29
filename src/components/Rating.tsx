// components/Rating.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faStarHalfAlt as fasStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating = 0 }) => {
  const totalStars = 5;

  const getStarIcon = (index) => {
    if (rating >= index) return fasStar;
    if (rating >= index - 0.5) return fasStarHalfAlt;
    return farStar;
  };

  return (
    <div className="flex items-center space-x-1 mb-4 px-8">
      <div className="flex">
        {Array.from({ length: totalStars }, (_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={getStarIcon(i + 1)}
            className={getStarIcon(i + 1) === farStar ? "text-gray-300" : "text-black"}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600 font-medium ml-2">
        {rating.toFixed(1)} / {totalStars}
      </span>
    </div>
  );
};

export default Rating;