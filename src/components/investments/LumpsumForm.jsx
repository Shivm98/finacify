import React from "react";
import { SliderInput } from "./SliderInput";

export const LumpsumForm = ({
  lumpsumInvestment,
  setLumpsumInvestment,
  period,
  setPeriod,
  growthRate,
  setGrowthRate,
}) => {
  return (
    <>
      <SliderInput
        label="Lumpsum Amount"
        value={lumpsumInvestment}
        setValue={setLumpsumInvestment}
        min={0}
        max={10000}
        step={0.01}
      />
      <SliderInput
        label="  For a period of (years)"
        value={period}
        setValue={setPeriod}
        min={0}
        max={100}
        step={1}
      />
      {/* <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">
          For a period of (years)
        </label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(Number(e.target.value))}
          className="w-full p-2 mt-2 border rounded text-black"
        />
      </div> */}
      <SliderInput
        label="Growth Rate (%)"
        value={growthRate}
        setValue={setGrowthRate}
        min={0}
        max={100}
        step={0.1}
      />
    </>
  );
};
