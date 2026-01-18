import React from "react";
import { Search, Bell, Menu, X } from "lucide-react";

const Topbar = ({ onMenuClick, isMobileMenuOpen }) => {
  return (
    <div className="bg-white shadow-lg px-8 py-5 flex items-center justify-between sticky top-0 z-40 border-b-4 border-amber-500">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Makhana Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products, orders..."
            className="pl-12 pr-6 py-3 w-80 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-3 hover:bg-amber-50 rounded-xl transition-all group">
          <Bell
            size={24}
            className="text-gray-600 group-hover:text-amber-600 transition-colors"
          />
          <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-600 font-bold text-lg">
            A
          </div>
          <div className="hidden md:block text-white">
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs opacity-90">admin@makhana.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
