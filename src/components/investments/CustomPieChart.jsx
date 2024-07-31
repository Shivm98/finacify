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
    // { name: "Goal Amount", value: goalAmount - investedAmount - gains },
  ];

  console.log("data*", data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Legend />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
