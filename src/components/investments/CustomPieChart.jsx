"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const CustomPieChart = ({ investedAmount, goalAmount, gains }) => {
  const data = [
    { name: "Invested Amount", value: investedAmount },
    { name: "Interest Earned", value: Number(gains) },
  ];

  console.log("data*", data);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Legend
            wrapperStyle={{
              fontSize: "0.775rem", // Base font size for small screens
            }}
            className="text-sm md:text-base lg:text-lg"
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              fontSize: "0.675rem", // Base font size for small screens
            }}
            wrapperClassName="text-sm md:text-base lg:text-lg"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
