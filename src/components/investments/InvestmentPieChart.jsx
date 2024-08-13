"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatNumber } from "@/utils"; // Import the formatNumber utility

const InvestmentPieChart = ({
  pieDataFutureValues,
  pieDataInvestments,
  COLORS,
}) => {
  // Correct calculation of total invested
  const totalInvested = pieDataInvestments.reduce(
    (acc, investment) => acc + investment.value,
    0
  );

  // Correct calculation of total future value and total gains
  const totalFutureValue = pieDataFutureValues.reduce(
    (acc, futureValue) => acc + futureValue.value,
    0
  );
  const totalGains = totalFutureValue - totalInvested;

  // Prepare data for the new pie chart
  const pieDataComparison = [
    { name: "Total Invested", value: totalInvested },
    { name: "Total Interest Earned", value: totalGains > 0 ? totalGains : 0 },
  ];

  return (
    <>
      <div className="mb-8">
        <h3 className="text-md font-semibold mb-4 text-gray-600 dark:text-gray-300">
          Total Invested vs. Total Interest Earned
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieDataComparison}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) =>
                `${name}: ${formatNumber(value.toFixed(2))}`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieDataComparison.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatNumber(value.toFixed(2))} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-8">
        <h3 className="text-md font-semibold mb-4 text-gray-600 dark:text-gray-300">
          Investment Distribution (Future Values)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieDataFutureValues}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) =>
                `${name}: ${formatNumber(value.toFixed(2))}`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieDataFutureValues.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatNumber(value.toFixed(2))} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default InvestmentPieChart;
