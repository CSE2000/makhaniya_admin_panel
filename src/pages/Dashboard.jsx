import React from "react";
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  Bell,
  ArrowUpRight,
} from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";

const Dashboard = ({ products = [], orders = [] }) => {
  const stats = [
    {
      title: "Total Revenue",
      value: `₹${orders
        .reduce((sum, o) => sum + o.amount, 0)
        .toLocaleString()}`,
      icon: DollarSign,
      trend: 12,
      color: "green",
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingCart,
      trend: 8,
      color: "blue",
    },
    {
      title: "Products",
      value: products.length,
      icon: Package,
      trend: 5,
      color: "amber",
    },
    {
      title: "Customers",
      value: "1.2K",
      icon: Users,
      trend: 15,
      color: "purple",
    },
  ];

  const activities = [
    {
      title: "New Order Received",
      description: "Order #1234 from Rajesh Kumar",
      time: "5 min ago",
      icon: <ShoppingCart size={20} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Product Added",
      description: "Caramel Makhana added to inventory",
      time: "1 hour ago",
      icon: <Package size={20} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Stock Alert",
      description: "Plain Makhana running low",
      time: "3 hours ago",
      icon: <Bell size={20} />,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Order Delivered",
      description: "Order #1230 successfully delivered",
      time: "5 hours ago",
      icon: <TrendingUp size={20} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-4xl font-bold mb-3">Dashboard Overview</h2>
        <p className="text-amber-50 text-lg">
          Welcome back! Here's what's happening with your Makhana store today.
          🎉
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Sales Overview
              </h3>
              <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold">
                View Details <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="h-72 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-xl">
              <div className="text-center">
                <TrendingUp size={64} className="text-amber-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  Sales chart visualization
                </p>
                <p className="text-sm text-gray-400">
                  Connect analytics for detailed insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
};

export default Dashboard;
