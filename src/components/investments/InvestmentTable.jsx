"use client";
import React from "react";
import { formatNumber } from "@/utils";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const InvestmentTable = ({
  filteredInvestments,
  editInvestment,
  removeInvestment,
  calculateTotalInvested,
  calculateFutureValueForInvestment,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">
        Investment Summary
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Period (Months)
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Growth Rate (%)
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Future Value
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestments.map((investment, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-300">
                  {investment.investmentName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                  {formatNumber(calculateTotalInvested(investment))}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                  {investment.periodMonths}
                </td>
                <td
                  className={`px-4 py-3 text-sm font-medium ${
                    investment.growthRate > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {investment.growthRate}%
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                  {formatNumber(calculateFutureValueForInvestment(investment))}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                  {investment.category}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                  {investment.type}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300 flex space-x-2">
                  <button
                    onClick={() => editInvestment(index)}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => removeInvestment(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentTable;
