import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEyeSlash,
  faHeart,
  faPhone,
  faBookmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// Define the shape of the Designer object
interface Designer {
  id: string;
  shortlisted: boolean;
}

// Props interface
interface DesignerActionsProps {
  designer: Designer;
  toggleDetails: (id: string) => void;
  toggleShortlist: (id: string) => void;
  showDetailsState: boolean;
}

const DesignerActions: React.FC<DesignerActionsProps> = ({
  designer,
  toggleDetails,
  toggleShortlist,
  showDetailsState,
}) => {
  return (
    <div className="flex justify-around p-3 text-sm text-gray-600 flex-col">

      {/* Show Details */}
      {!showDetailsState && (
        <button
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => toggleDetails(designer.id)}
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          <span>Details</span>
        </button>
      )}

      {/* Hide Details */}
      {showDetailsState && (
        <button
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => toggleDetails(designer.id)}
        >
          <FontAwesomeIcon icon={faEyeSlash} className="w-5 h-5" />
          <span>Hide</span>
        </button>
      )}

      {/* Shortlist */}
      <button
        className={`flex items-center space-x-1 p-2 rounded-lg transition-colors ${
          designer.shortlisted ? "text-orange-500 bg-orange-50" : "hover:bg-gray-100"
        }`}
        onClick={() => toggleShortlist(designer.id)}
      >
        <span className="relative inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faBookmark}
            className={`w-5 h-5 ${
              designer.shortlisted ? "text-orange-500" : "text-gray-600"
            }`}
          />
          {designer.shortlisted && (
            <FontAwesomeIcon
              icon={faHeart}
              className="absolute w-3 h-3 text-orange-500"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </span>
        <span>Shortlist</span>
      </button>

      {/* Call */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
        <span>Call</span>
      </button>

      {/* Report */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon icon={faCircleExclamation} className="w-5 h-5" />
        <span>Report</span>
      </button>
    </div>
  );
};

export default DesignerActions;