"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Graph } from "@/components/investments/Graph";
import { SIPForm } from "@/components/investments/SipForm";
import { LumpsumForm } from "@/components/investments/LumpsumForm";
import { Results } from "@/components/investments/Results";
import { GoalForm } from "@/components/investments/GoalForm";
import { CustomPieChart } from "@/components/investments/CustomPieChart";
import "./globals.css";

const Page = () => {
  const [mode, setMode] = useState("SIP"); // 'SIP', 'Lumpsum', or 'Goal'
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [lumpsumInvestment, setLumpsumInvestment] = useState(5000);
  const [periodMonths, setPeriodMonths] = useState(120); // Now in months
  const [growthRate, setGrowthRate] = useState(10);
  const [goalAmount, setGoalAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6); // New inflation rate state

  const totalInvested =
    mode === "SIP" ? monthlyInvestment * periodMonths : lumpsumInvestment;

  const calculateFutureValue = () => {
    const futureValue =
      mode === "SIP"
        ? (
            monthlyInvestment *
            (((1 + growthRate / 100 / 12) ** periodMonths - 1) /
              (growthRate / 100 / 12)) *
            (1 + growthRate / 100 / 12)
          ).toFixed(2)
        : (
            lumpsumInvestment *
            (1 + growthRate / 100 / 12) ** periodMonths
          ).toFixed(2);

    // Adjust for inflation
    const inflationAdjustedFutureValue = (
      futureValue /
      (1 + inflationRate / 100) ** (periodMonths / 12)
    ).toFixed(2);

    return { futureValue, inflationAdjustedFutureValue };
  };

  const { futureValue, inflationAdjustedFutureValue } = calculateFutureValue();
  const gains = (futureValue - totalInvested).toFixed(2);

  const calculateRequiredMonthlyInvestment = () => {
    const monthlyRate = growthRate / 100 / 12;
    const requiredInvestment =
      (goalAmount * monthlyRate) / ((1 + monthlyRate) ** periodMonths - 1);

    return requiredInvestment.toFixed(2);
  };

  const data = Array.from({ length: periodMonths / 12 }, (_, i) => {
    const year = i + 1;
    const totalValue =
      mode === "SIP"
        ? monthlyInvestment *
          (((1 + growthRate / 100 / 12) ** (year * 12) - 1) /
            (growthRate / 100 / 12)) *
          (1 + growthRate / 100 / 12)
        : lumpsumInvestment * (1 + growthRate / 100 / 12) ** (year * 12);
    const investedAmount =
      mode === "SIP" ? monthlyInvestment * year * 12 : lumpsumInvestment;
    const gain = totalValue - investedAmount;

    return {
      name: `${year}Y`,
      "Total Invested": investedAmount,
      Gains: gain,
    };
  });

  const requiredMonthlyInvestment =
    mode === "Goal" ? calculateRequiredMonthlyInvestment() : 0;
  const investedAmount =
    mode === "Goal" ? requiredMonthlyInvestment * periodMonths : 0;
  const goalAmountData = mode === "Goal" ? goalAmount : 0;
  const interestEarned = Number(goalAmount - investedAmount).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-2 md:p-10 ">
      <div className="container mx-auto max-w-5xl bg-white dark:bg-gray-700 p-2 md:p-6 rounded-lg shadow-md md:mt-2 mt-10">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-6 text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Calculate the future value of your investment
        </motion.h2>
        <div className="flex justify-start mb-6">
          <button
            onClick={() => setMode("SIP")}
            className={`px-4 py-2 mx-2 rounded-md text-sm ${
              mode === "SIP"
                ? "bg-blue-100 text-primary"
                : " text-gray-700 dark:text-white"
            }`}
          >
            SIP
          </button>
          <button
            onClick={() => setMode("Lumpsum")}
            className={`px-4 py-2 mx-2 rounded-md text-sm ${
              mode === "Lumpsum"
                ? "bg-blue-100 text-primary"
                : " text-gray-700 dark:text-white"
            }`}
          >
            Lumpsum
          </button>
          <button
            onClick={() => setMode("Goal")}
            className={`px-4 py-2 mx-2 rounded-md text-sm ${
              mode === "Goal"
                ? "bg-blue-100 text-primary"
                : " text-gray-700 dark:text-white"
            }`}
          >
            Goal
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 md:pr-4">
            {mode === "SIP" ? (
              <SIPForm
                monthlyInvestment={monthlyInvestment}
                setMonthlyInvestment={setMonthlyInvestment}
                periodMonths={periodMonths}
                setPeriodMonths={setPeriodMonths}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
                inflationRate={inflationRate}
                setInflationRate={setInflationRate}
              />
            ) : mode === "Lumpsum" ? (
              <LumpsumForm
                lumpsumInvestment={lumpsumInvestment}
                setLumpsumInvestment={setLumpsumInvestment}
                periodMonths={periodMonths}
                setPeriodMonths={setPeriodMonths}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
                inflationRate={inflationRate}
                setInflationRate={setInflationRate}
              />
            ) : (
              <GoalForm
                goalAmount={goalAmount}
                setGoalAmount={setGoalAmount}
                periodMonths={periodMonths}
                setPeriodMonths={setPeriodMonths}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
                inflationRate={inflationRate}
                setInflationRate={setInflationRate}
              />
            )}
          </div>
          {(mode === "SIP" || mode === "Lumpsum" || mode === "Goal") && (
            <div className="md:w-3/5 md:pl-4">
              {mode === "Goal" ? (
                <>
                  <CustomPieChart
                    investedAmount={investedAmount}
                    goalAmount={goalAmountData}
                    gains={interestEarned}
                  />
                </>
              ) : (
                <Graph data={data} />
              )}
            </div>
          )}
        </div>
        {mode !== "Goal" ? (
          <div className="mt-6">
            <Results
              futureValue={futureValue}
              inflationAdjustedFutureValue={inflationAdjustedFutureValue}
              totalInvested={totalInvested}
              gains={gains}
              mode={mode}
            />
          </div>
        ) : (
          <div className="mt-6">
            <Results
              futureValue={goalAmountData}
              inflationAdjustedFutureValue={inflationAdjustedFutureValue}
              totalInvested={investedAmount}
              gains={interestEarned}
              calculateRequiredMonthlyInvestment={
                calculateRequiredMonthlyInvestment
              }
              mode={mode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
