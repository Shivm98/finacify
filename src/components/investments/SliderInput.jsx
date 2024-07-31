"use client";
import React from "react";
import { motion } from "framer-motion";

export const SliderInput = ({ label, value, setValue, min, max, step }) => {
  return (
    <div className="mb-6">
      <label className="text-xs block text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative flex-col justify-center items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="text-sm w-full p-2 border rounded text-black dark:text-white dark:bg-gray-800 dark:border-gray-600"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full mt-2  appearance-none h-1 rounded-lg bg-primary"
          style={{
            accentColor: "rgb(231 231 231)",
            cursor: "pointer", // Customize slider color
          }}
        />
      </div>
    </div>
  );
};
