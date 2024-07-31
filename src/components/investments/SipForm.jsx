import React from "react";
import { SliderInput } from "./SliderInput";

export const SIPForm = ({
  monthlyInvestment,
  setMonthlyInvestment,
  period,
  setPeriod,
  growthRate,
  setGrowthRate,
}) => {
  return (
    <>
      <SliderInput
        label="I want to invest monthly"
        value={monthlyInvestment}
        setValue={setMonthlyInvestment}
        min={0}
        max={100000}
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
