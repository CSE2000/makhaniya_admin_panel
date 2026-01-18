import React, { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import ProductModal from "../components/products/ProductModal";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Makhana Paripari",
      category: "Paripari",
      price: 150,
      originalPrice: null,
      discount: 0,
      stock: 50,
      image: "https://via.placeholder.com/100",
      description: "Crispy and crunchy fox nut paripari",
    },
    {
      id: 2,
      name: "Roasted Makhana",
      category: "Roasted",
      price: 120,
      originalPrice: 150,
      discount: 20,
      stock: 75,
      image: "https://via.placeholder.com/100",
      description: "Lightly roasted fox nuts",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = (productData) => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...productData, id: p.id } : p,
        ),
      );
    } else {
      setProducts([...products, { ...productData, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your fox nut inventory</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowModal(true);
          }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="card p-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none ml-2 w-full"
            />
          </div>
          <select className="input w-48">
            <option>All Categories</option>
            <option>Paripari</option>
            <option>Roasted</option>
            <option>Salted</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {product.discount > 0 && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                    {product.category}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  Stock: <span className="font-semibold">{product.stock}</span>
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="p-2 border border-red-200 hover:bg-red-50 rounded-lg transition text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ProductModal
          onClose={() => {
            setShowModal(false);
            setEditingProduct(null);
          }}
          onSave={handleSave}
          product={editingProduct}
        />
      )}
    </div>
  );
};

export default Products;
