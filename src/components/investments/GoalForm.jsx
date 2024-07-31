import React from "react";
import { SliderInput } from "./SliderInput";

export const GoalForm = ({
  goalAmount,
  setGoalAmount,
  period,
  setPeriod,
  growthRate,
  setGrowthRate,
}) => {
  return (
    <>
      <SliderInput
        label="Goal Amount"
        value={goalAmount}
        setValue={setGoalAmount}
        min={0}
        max={10000000}
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
