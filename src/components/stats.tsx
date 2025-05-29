import React from "react";

type DesignerStatsProps = {
  projects: number | string;
  years: number | string;
  price: number | string;
};

const DesignerStats: React.FC<DesignerStatsProps> = ({ projects, years, price }) => {
  const stats = [
    { label: "Projects", value: projects },
    { label: "Years", value: years },
    { label: "Price", value: price },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 p-4 text-center">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-xl font-bold text-gray-800">{stat.value}</p>
          <p className="text-xs text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DesignerStats;
