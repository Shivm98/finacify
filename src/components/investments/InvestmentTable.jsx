"use client";
import React from "react";
import { addCommas } from "@/utils"; // Use addCommas utility for formatting numbers
import { FaEdit, FaTrashAlt, FaFileExport } from "react-icons/fa";
import * as XLSX from "xlsx";

const InvestmentTable = ({
  filteredInvestments,
  editInvestment,
  removeInvestment,
  calculateTotalInvested,
  calculateFutureValueForInvestment,
}) => {
  const handleExport = () => {
    // Prepare data for export
    const exportData = filteredInvestments.map((investment) => ({
      Name: investment.investmentName,
      Amount: addCommas(calculateTotalInvested(investment)).replace("₹", ""),
      "Period (Months)": investment.periodMonths,
      "Growth Rate (%)": `${investment.growthRate}%`,
      "Future Value": addCommas(
        calculateFutureValueForInvestment(investment)
      ).replace("₹", ""),
      Category: investment.category,
      Type: investment.type,
    }));

    // Create a new workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Investments");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "investments.xlsx");
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          Investment Summary
        </h3>
        <button
          onClick={handleExport}
          className="text-white bg-blue-500 hover:bg-blue-600 transition-colors font-semibold py-2 px-4 rounded-md flex items-center space-x-2"
        >
          <FaFileExport />
          <span>Export to Excel</span>
        </button>
      </div>
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
            {filteredInvestments.map((investment, index) => {
              const totalInvested = calculateTotalInvested(investment);
              const futureValue = calculateFutureValueForInvestment(investment);
              const percentageIncrease =
                ((futureValue - totalInvested) / totalInvested) * 100;

              return (
                <tr
                  key={index}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-300">
                    {investment.investmentName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">
                    ₹{addCommas(totalInvested)}
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
                    ₹{addCommas(futureValue)}{" "}
                    <span className="text-green-600">
                      ({percentageIncrease.toFixed(2)}%)
                    </span>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentTable;
