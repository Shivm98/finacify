"use client";
import React from "react";
import { formatNumber } from "@/utils";

const InvestmentTable = ({
  filteredInvestments,
  editInvestment,
  removeInvestment,
  calculateTotalInvested,
  calculateFutureValueForInvestment,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-md font-semibold mb-4 text-gray-600 dark:text-gray-300">
        Investment Summary
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Period (Months)
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Growth Rate (%)
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Future Value
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestments.map((investment, index) => (
              <tr key={index} className="border-t dark:border-gray-600">
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {investment.investmentName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(calculateTotalInvested(investment))}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {investment.periodMonths}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {investment.growthRate}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(calculateFutureValueForInvestment(investment))}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {investment.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  {investment.type}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => editInvestment(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeInvestment(index)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    Remove
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
