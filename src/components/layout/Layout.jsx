import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="bg-white shadow px-4 py-3 flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
          <h1 className="ml-4 font-semibold text-lg">Dashboard</h1>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
