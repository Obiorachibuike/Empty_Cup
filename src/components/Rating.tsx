import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faImage,
  faMapPin,
  faHeart,
  faArrowDownShortWide,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

import {
  faAddressCard as farAddressCard,
} from '@fortawesome/free-regular-svg-icons';

interface AppNavbarProps {
  showShortlistedOnly: boolean;
  toggleShortlistedFilter: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({ showShortlistedOnly, toggleShortlistedFilter }) => {
  return (
    <nav className="w-full bg-white shadow-sm p-4 flex justify-around items-center text-sm text-gray-600 border-t border-gray-200 rounded-b-xl">

      {/* Contact */}
      <div className="flex flex-col items-center space-y-1 text-orange-500">
        <FontAwesomeIcon icon={farAddressCard} className="w-6 h-6" />
        <span>Contact</span>
      </div>

      {/* Gallery */}
      <div className="flex flex-col items-center space-y-1">
        <FontAwesomeIcon icon={faImage} className="w-6 h-6" />
        <span>Gallery</span>
      </div>

      {/* Map */}
      <div className="flex flex-col items-center space-y-1 opacity-50 cursor-not-allowed">
        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
        <span>Map</span>
      </div>

      {/* Shortlisted */}
      <div
        className={`flex flex-col items-center space-y-1 cursor-pointer ${
          showShortlistedOnly ? 'text-orange-500' : ''
        }`}
        onClick={toggleShortlistedFilter}
      >
        <FontAwesomeIcon
          icon={faCalendarCheck}
          className={`w-6 h-6 ${
            showShortlistedOnly ? 'text-orange-500' : 'text-gray-600'
          }`}
        />
        <span>Shortlisted</span>
      </div>

      {/* Sort */}
      <div className="flex flex-col items-center space-y-1">
        <FontAwesomeIcon icon={faArrowDownShortWide} className="w-6 h-6" />
        <span>Sort</span>
      </div>

    </nav>
  );
};

export default AppNavbar;