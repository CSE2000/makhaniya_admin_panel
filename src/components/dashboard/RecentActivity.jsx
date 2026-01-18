import React from "react";

const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pb-4 border-b last:border-b-0 hover:bg-gray-50 p-3 rounded-xl transition-colors"
          >
            <div className={`p-3 rounded-xl ${activity.color} shadow-md`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{activity.title}</p>
              <p className="text-sm text-gray-500 mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
