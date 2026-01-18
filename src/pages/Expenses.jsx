import React, { useState } from "react";
import Button from "../components/common/Button";
import { expenses } from "../data/mockData";

const Expenses = () => {
  const [expenseList] = useState(expenses);
  const totalExpenses = expenseList.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Expenses</h2>
          <p className="text-gray-500">Track and manage business expenses</p>
        </div>
        <Button variant="primary">
          <span>➕</span>
          Add Expense
        </Button>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <p className="text-purple-100 mb-2">Total Expenses</p>
        <p className="text-5xl font-bold">${totalExpenses.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {expenseList.map((expense) => (
          <div
            key={expense.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  💳
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {expense.category}
                  </p>
                  <p className="text-sm text-gray-500">{expense.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">{expense.date}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${expense.amount.toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                    expense.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {expense.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
