import React from "react";

// Define the shape of the Designer prop
interface Designer {
  phone1: string;
  phone2: string;
  // Add more fields as needed for extended details
}

interface DesignerDetailsProps {
  designer: Designer;
}

const DesignerDetails: React.FC<DesignerDetailsProps> = ({ designer }) => {
  return (
    <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-700">
      <p className="mb-2">
        <span className="font-semibold">Phone:</span>{" "}
        {designer.phone1}, {designer.phone2}
      </p>
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