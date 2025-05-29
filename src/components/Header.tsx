// AppHeader.jsx
import React from 'react';

const AppHeader = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10 rounded-b-xl">
      <div className="flex items-center space-x-2">
        {/* EmptyCup Logo - Placeholder for an actual logo */}
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          <img
            src="https://placehold.co/32x32/FFD700/000000?text=EC"
            alt="EmptyCup Logo"
            className="rounded-full"
          />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">EmptyCup</h1>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </header>
  );
};

export default AppHeader;