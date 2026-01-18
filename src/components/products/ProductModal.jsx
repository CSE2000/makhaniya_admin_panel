import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const ProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      category: "Roasted",
      price: "",
      stock: "",
    }
  );

  const handleSubmit = () => {
    if (formData.name && formData.price && formData.stock) {
      onSave(formData);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4">
          {product ? "Edit" : "Add"} Product
        </h3>
        <div className="space-y-4">
          <Input
            label="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Premium Roasted Makhana"
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Roasted</option>
              <option>Flavored</option>
              <option>Plain</option>
              <option>Organic</option>
            </select>
          </div>
          <Input
            label="Price (₹)"
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder="299"
          />
          <Input
            label="Stock Quantity"
            type="number"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            placeholder="100"
          />
          <div className="flex gap-3 pt-4">
            <Button onClick={handleSubmit} className="flex-1">
              Save Product
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
