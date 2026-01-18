import React, { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../common/Button";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ProductList = ({ products, setProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleView = (product) => {
    alert(
      `Viewing: ${product.name}\nPrice: ₹${product.price}\nStock: ${product.stock}`
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <Button
          onClick={() => {
            setEditingProduct(null);
            setShowModal(true);
          }}
        >
          <Plus size={20} /> Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        ))}
      </div>

      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowModal(false)}
          onSave={(product) => {
            if (editingProduct) {
              setProducts(
                products.map((p) => (p.id === product.id ? product : p))
              );
            } else {
              setProducts([...products, { ...product, id: Date.now() }]);
            }
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductList;
