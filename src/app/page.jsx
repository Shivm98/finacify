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

const SIPCalculatorPage = () => {
  const [mode, setMode] = useState("SIP"); // 'SIP', 'Lumpsum', or 'Goal'
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [lumpsumInvestment, setLumpsumInvestment] = useState(5000);
  const [period, setPeriod] = useState(10);
  const [growthRate, setGrowthRate] = useState(10);
  const [goalAmount, setGoalAmount] = useState(100000);

  const totalInvested =
    mode === "SIP" ? monthlyInvestment * period * 12 : lumpsumInvestment;
  const futureValue =
    mode === "SIP"
      ? (
          monthlyInvestment *
          (((1 + growthRate / 100 / 12) ** (period * 12) - 1) /
            (growthRate / 100 / 12)) *
          (1 + growthRate / 100 / 12)
        ).toFixed(2)
      : (lumpsumInvestment * (1 + growthRate / 100) ** period).toFixed(2);
  const gains = (futureValue - totalInvested).toFixed(2);

  const calculateRequiredMonthlyInvestment = () => {
    const monthlyRate = growthRate / 100 / 12;
    const totalMonths = period * 12;
    const requiredInvestment =
      (goalAmount * monthlyRate) / ((1 + monthlyRate) ** totalMonths - 1);

    return requiredInvestment.toFixed(2);
  };

  const data = Array.from({ length: period }, (_, i) => {
    const year = i + 1;
    const totalValue =
      mode === "SIP"
        ? monthlyInvestment *
          (((1 + growthRate / 100 / 12) ** (year * 12) - 1) /
            (growthRate / 100 / 12)) *
          (1 + growthRate / 100 / 12)
        : lumpsumInvestment * (1 + growthRate / 100) ** year;
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
    mode === "Goal" ? requiredMonthlyInvestment * period * 12 : 0;
  const goalAmountData = mode === "Goal" ? goalAmount : 0;
  const interestEarned = Number(goalAmount - investedAmount).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4 md:p-10 ">
      <div className="container mx-auto max-w-5xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md md:mt-2 mt-10">
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
                period={period}
                setPeriod={setPeriod}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
              />
            ) : mode === "Lumpsum" ? (
              <LumpsumForm
                lumpsumInvestment={lumpsumInvestment}
                setLumpsumInvestment={setLumpsumInvestment}
                period={period}
                setPeriod={setPeriod}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
              />
            ) : (
              <GoalForm
                goalAmount={goalAmount}
                setGoalAmount={setGoalAmount}
                period={period}
                setPeriod={setPeriod}
                growthRate={growthRate}
                setGrowthRate={setGrowthRate}
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
              totalInvested={totalInvested}
              gains={gains}
              mode={mode}
            />
          </div>
        ) : (
          <div className="mt-6">
            <Results
              futureValue={goalAmountData}
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

export default SIPCalculatorPage;
