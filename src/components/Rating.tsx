import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as fasStar,
  faStarHalfStroke,
  faStar as farStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStarRegular } from '@fortawesome/free-regular-svg-icons';

interface RatingProps {
  rating: number; // e.g. 3.5, 4, 4.7, etc.
  maxRating?: number; // total stars, default 5
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      // full star
      stars.push(<FontAwesomeIcon key={i} icon={fasStar} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      // half star
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} className="text-yellow-400" />);
    } else {
      // empty star (regular)
      stars.push(<FontAwesomeIcon key={i} icon={farStarRegular} className="text-yellow-400" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default Rating;