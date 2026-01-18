import React from "react";
import { Package } from "lucide-react";

const Categories = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Roasted", "Flavored", "Plain", "Organic"].map((cat) => (
          <div
            key={cat}
            className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <Package size={32} className="mx-auto text-amber-600 mb-2" />
            <h3 className="font-bold text-lg">{cat}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
