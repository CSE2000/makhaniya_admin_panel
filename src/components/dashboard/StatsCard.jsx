import React from "react";

const StatsCard = ({ title, value, icon: Icon, trend, color = "amber" }) => {
  const colorClasses = {
    amber: "from-amber-400 to-orange-500",
    blue: "from-blue-400 to-cyan-500",
    green: "from-green-400 to-emerald-500",
    purple: "from-purple-400 to-pink-500",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
            {title}
          </p>
          <h3 className="text-4xl font-bold text-gray-800 mt-3">{value}</h3>
          {trend && (
            <div
              className={`flex items-center gap-1 mt-3 ${
                trend > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              <span className="text-lg font-bold">
                {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
              </span>
              <span className="text-xs">vs last month</span>
            </div>
          )}
        </div>
        <div
          className={`p-5 rounded-2xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
        >
          <Icon size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
