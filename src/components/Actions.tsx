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

interface Designer {
  id: string;
  shortlisted: boolean;
}

interface DesignerActionsProps {
  designer: Designer;
  showDetails: (id: string) => void;
  hideDetails: (id: string) => void;
  toggleShortlist: (id: string) => void;
}

const DesignerActions: React.FC<DesignerActionsProps> = ({
  designer,
  showDetails,
  hideDetails,
  toggleShortlist,
}) => {
  return (
    <div className="flex justify-around p-3 text-sm text-gray-600 flex-col">

      {/* Show Details button */}
      <button
        className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => showDetails(designer.id)}
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
        <span>Details</span>
      </button>

      {/* Hide Details button */}
      <button
        className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => hideDetails(designer.id)}
      >
        <FontAwesomeIcon icon={faEyeSlash} className="w-5 h-5" />
        <span>Hide</span>
      </button>

      {/* Shortlist butto */}
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

      {/* Call button */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
        <span>Call</span>
      </button>

      {/* Report button */}
      <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <FontAwesomeIcon icon={faCircleExclamation} className="w-5 h-5" />
        <span>Report</span>
      </button>
    </div>
  );
};

export default DesignerActions;