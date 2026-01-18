import React, { useState } from "react";
import OrderList from "../components/orders/OrderList";
import { Search, Filter } from "lucide-react";

const Orders = () => {
  const [search, setSearch] = useState("");

  // Mock Orders (replace with API later)
  const orders = [
    {
      id: 1001,
      customer: "Rahul Sharma",
      product: "Roasted Makhana",
      amount: 499,
      status: "Pending",
      date: "12 Jan 2026",
    },
    {
      id: 1002,
      customer: "Anita Verma",
      product: "Peri Peri Makhana",
      amount: 699,
      status: "Processing",
      date: "13 Jan 2026",
    },
    {
      id: 1003,
      customer: "Amit Singh",
      product: "Classic Salted Makhana",
      amount: 399,
      status: "Delivered",
      date: "14 Jan 2026",
    },
    {
      id: 1004,
      customer: "Neha Gupta",
      product: "Butter Masala Makhana",
      amount: 549,
      status: "Cancelled",
      date: "15 Jan 2026",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search),
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-500 mt-1">Manage and track customer orders</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-64 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition shadow-md">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Order Table */}
      <OrderList orders={filteredOrders} />

      {/* Footer Summary */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Total Orders: {filteredOrders.length}</span>
        <span>Showing latest orders</span>
      </div>
    </div>
  );
};

export default Orders;
