import { NavLink } from "react-router-dom";
import {
  TrendingUp,
  Package,
  ShoppingCart,
  Filter,
  Settings as SettingsIcon,
  CreditCard,
  ClipboardList,
} from "lucide-react";

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: TrendingUp },
    { path: "/products", label: "Products", icon: Package },
    { path: "/orders", label: "Orders", icon: ShoppingCart },
    { path: "/expenses", label: "Expenses", icon: CreditCard },
    { path: "/inventory", label: "Inventory", icon: ClipboardList },
    { path: "/categories", label: "Categories", icon: Filter },
    { path: "/settings", label: "Settings", icon: SettingsIcon },
  ];

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white w-72 min-h-screen p-6 fixed lg:static transition-transform duration-300 z-50 shadow-2xl ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
              <Package size={32} className="text-amber-600" />
            </div>
            <div>
              <h2 className="font-bold text-xl">Makhana Store</h2>
              <p className="text-xs text-amber-100">Premium Fox Nuts</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <item.icon size={22} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
