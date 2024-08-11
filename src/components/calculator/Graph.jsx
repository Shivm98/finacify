import { addCommas, formatNumber } from "@/utils";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const Graph = ({ data }) => {
  const formattedData = data.map((item) => ({
    ...item,
    "Total Value": (item["Total Invested"] + item.Gains).toFixed(2),
    "Total Invested": item["Total Invested"].toFixed(2),
    "Interest Earned": item.Gains.toFixed(2),
  }));

  return (
    <div className="mb-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={formattedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickFormatter={(tick) =>
              window.innerWidth < 600 ? tick.slice(0, 3) : tick
            }
          />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={formatNumber} />
          <Tooltip
            formatter={(value) => addCommas(Number(value).toFixed(2))}
            contentStyle={{ fontSize: "12px" }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="Total Invested" stackId="a" fill="#29a587" />
          <Bar dataKey="Interest Earned" stackId="a" fill="#ccc" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
