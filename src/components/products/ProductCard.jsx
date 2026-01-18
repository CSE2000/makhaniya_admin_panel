import React from "react";
import { Package, Eye, Edit, Trash2, Star } from "lucide-react";
import Button from "../common/Button";

const ProductCard = ({ product, onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Product Image */}
      <div className="h-56 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star size={14} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-gray-700">4.8</span>
        </div>
        <Package size={80} className="text-amber-600" />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4 bg-gray-100 inline-block px-3 py-1 rounded-full">
          {product.category}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            ₹{product.price}
          </span>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
              product.stock > 50
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
            }`}
          >
            {product.stock} in stock
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onView(product)}
            className="flex-1"
          >
            <Eye size={16} /> View
          </Button>
          <Button variant="secondary" size="sm" onClick={() => onEdit(product)}>
            <Edit size={16} />
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(product.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
