import React, { useState } from "react";
import Button from "../components/common/Button";
import { inventory } from "../data/mockData";

const Inventory = () => {
  const [inventoryList] = useState(inventory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Inventory</h2>
          <p className="text-gray-500">Monitor stock levels and warehouse</p>
        </div>
        <Button variant="success">
          <span>📦</span>
          Update Stock
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Warehouse
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventoryList.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {item.product}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {item.quantity}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.warehouse}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.lastUpdated}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.quantity > 50
                          ? "bg-green-100 text-green-700"
                          : item.quantity > 10
                            ? "bg-yellow-100 text-yellow-700"
                            : item.quantity > 0
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.quantity > 50
                        ? "Healthy"
                        : item.quantity > 10
                          ? "Medium"
                          : item.quantity > 0
                            ? "Low"
                            : "Out"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
