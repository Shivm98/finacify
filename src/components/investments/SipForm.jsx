import React from "react";
import { SliderInput } from "./SliderInput";

export const SIPForm = ({
  monthlyInvestment,
  setMonthlyInvestment,
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
        label="I want to invest monthly"
        value={monthlyInvestment}
        setValue={setMonthlyInvestment}
        min={0}
        max={10000}
        step={10}
      />
      <SliderInput
        label="For a period of (months)"
        value={periodMonths}
        setValue={setPeriodMonths}
        min={0}
        max={600}
        step={1}
      />
      <SliderInput
        label="Growth Rate (%)"
        value={growthRate}
        setValue={setGrowthRate}
        min={0}
        max={70}
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
