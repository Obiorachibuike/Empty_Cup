// DesignerDetails.jsx
import React from 'react';

const DesignerDetails = ({ designer }) => {
  return (
    <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-700">
      <p className="mb-2">
        <span className="font-semibold">Phone:</span>{" "}
        {designer.phone1}, {designer.phone2}
      </p>
      {/* More detailed information can go here */}
      <p>
        This section would contain more in-depth information about
        the designer, such as their portfolio, client testimonials,
        and specific services offered. It expands and collapses
        based on the 'Details' button click.
      </p>
    </div>
  );
};

export default DesignerDetails;