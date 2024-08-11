import React from "react";
import { SliderInput } from "./SliderInput";

export const GoalForm = ({
  goalAmount,
  setGoalAmount,
  periodMonths,
  setPeriodMonths,
  growthRate,
  setGrowthRate,
  inflationRate,
  setInflationRate,
}) => {
  return (
    <>
      <SliderInput
        label="Goal Amount"
        value={goalAmount}
        setValue={setGoalAmount}
        min={0}
        max={1000000}
        step={10}
      />
      <SliderInput
        label="For a period of (months)"
        value={periodMonths}
        setValue={setPeriodMonths}
        min={0}
        max={600} // 100 years in months
        step={1}
      />
      <SliderInput
        label="Growth Rate (%)"
        value={growthRate}
        setValue={setGrowthRate}
        min={0}
        max={50}
        step={0.1}
      />
      <SliderInput
        label="Inflation Rate (%)"
        value={inflationRate}
        setValue={setInflationRate}
        min={0}
        max={20}
        step={0.1}
      />
    </>
  );
};
