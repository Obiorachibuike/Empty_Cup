import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,      // For "Details" button (arrow right)
  faEyeSlash,          // For "Hide Details" button (slashed eye)
  faHeart,             // For the "Shortlist" button (heart inside bookmark)
  faPhone,             // For "Call" button
  faBookmark,          // For the "Shortlist" button (solid bookmark)
  faCircleExclamation, // For the Report button (solid exclamation circle)
} from "@fortawesome/free-solid-svg-icons";

// Removed: faBookmark as farBookmark import is no longer needed

const DesignerActions = ({ designer, toggleDetails, toggleShortlist, showDetailsState }) => {
  return (
    <div className="flex justify-around p-3 text-sm text-gray-600 flex-col">

      {/* Details Button - Visible ONLY when details are NOT shown (initial state) */}
      {!showDetailsState && ( // This will be true on initial load
        <button
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => toggleDetails(designer.id)} // Toggles state, showing details
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          <span>Details</span>
        </button>
      )}

      {/* Hide Details Button - Visible ONLY when details ARE shown (after clicking Details) */}
      {showDetailsState && ( // This will be true after clicking "Details"
        <button
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => toggleDetails(designer.id)} // Toggles state, hiding details
        >
          <FontAwesomeIcon icon={faEyeSlash} className="w-5 h-5" />
          <span>Hide</span>
        </button>
      )}

      {/* Shortlist Button */}
      <button
        className={`flex items-center space-x-1 p-2 rounded-lg transition-colors ${
          designer.shortlisted ? "text-orange-500 bg-orange-50" : "hover:bg-gray-100"
        }`}
        onClick={() => toggleShortlist(designer.id)}
      >
        <span className="relative inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faBookmark} // Always show the solid bookmark
            className={`w-5 h-5 ${
              designer.shortlisted ? "text-orange-500" : "text-gray-600"
            }`}
          />
          {designer.shortlisted && (
            <FontAwesomeIcon
              icon={faHeart}
              className="absolute w-3 h-3 text-orange-500"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          )}
        </span>
        <span>Shortlist</span>
      </button>

      {/* Call Button */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
        <span>Call</span>
      </button>

      {/* Report Button */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="w-5 h-5"
        />
        <span>Report</span>
      </button>
    </div>
  );
};

export default DesignerActions;