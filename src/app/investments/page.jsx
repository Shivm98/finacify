"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Results } from "@/components/calculator/Results";
import InvestmentForm from "@/components/investments/InvestmentForm";
import InvestmentTable from "@/components/investments/InvestmentTable";
import InvestmentPieChart from "@/components/investments/InvestmentPieChart";
import FilterByCategory from "@/components/investments/FilterByCategory";

const CombinedInvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newInvestment, setNewInvestment] = useState({
    investmentName: `Investment ${investments.length + 1}`,
    amount: 5000,
    periodMonths: 12,
    growthRate: 7,
    category: "Stocks",
    type: "SIP",
    inflationRate: 6,
  });

  const categories = [
    "All",
    "FD",
    "RD",
    "Gold",
    "Stocks",
    "Bonds",
    "Mutual Funds",
    "Real Estate",
  ];

  const validateInvestment = (investment) => {
    if (!investment.investmentName) return "Investment name is required.";
    if (investment.amount <= 0)
      return "Investment amount must be greater than zero.";
    if (investment.periodMonths <= 0)
      return "Investment period must be greater than zero.";
    if (investment.growthRate <= 0)
      return "Growth rate must be greater than zero.";
    if (!investment.category) return "Investment category is required.";
    return null;
  };

  const calculateTotalInvested = (investment) => {
    return investment.type === "SIP"
      ? investment.amount * investment.periodMonths
      : investment.amount;
  };

  const calculateFutureValueForPeriod = (investment, period) => {
    return investment.type === "SIP"
      ? (
          investment.amount *
          (((1 + investment.growthRate / 100 / 12) ** period - 1) /
            (investment.growthRate / 100 / 12)) *
          (1 + investment.growthRate / 100 / 12)
        ).toFixed(2)
      : (
          investment.amount *
          (1 + investment.growthRate / 100 / 12) ** period
        ).toFixed(2);
  };

  const calculateFutureValueForInvestment = (investment) => {
    return calculateFutureValueForPeriod(investment, investment.periodMonths);
  };

  const calculateInflationAdjustedValue = (
    futureValue,
    inflationRate,
    periodMonths
  ) => {
    const inflationFactor = (1 + inflationRate / 100) ** (periodMonths / 12);
    return (futureValue / inflationFactor).toFixed(2);
  };

  const addInvestment = () => {
    const validationError = validateInvestment(newInvestment);
    if (validationError) {
      alert(validationError);
      return;
    }

    const updatedInvestment = {
      ...newInvestment,
    };

    setInvestments([...investments, updatedInvestment]);
    setNewInvestment({
      investmentName: `Investment ${investments.length + 2}`,
      amount: 5000,
      periodMonths: 12,
      growthRate: 7,
      category: "Stocks",
      type: "SIP",
      inflationRate: 6,
    });
    setShowForm(false);
    setShowResults(true);
  };

  const editInvestment = (index) => {
    const investmentToEdit = investments[index];
    setNewInvestment(investmentToEdit);
    setShowForm(true);
    setInvestments(investments.filter((_, i) => i !== index));
  };

  const removeInvestment = (index) => {
    setInvestments(investments.filter((_, i) => i !== index));
  };

  const clearAllInvestments = () => {
    setInvestments([]);
    setShowResults(false);
  };

  const filteredInvestments =
    selectedCategory === "All"
      ? investments
      : investments.filter(
          (investment) => investment.category === selectedCategory
        );

  const calculateCombinedFutureValue = () => {
    return filteredInvestments.reduce(
      (acc, investment) =>
        acc + parseFloat(calculateFutureValueForInvestment(investment)),
      0
    );
  };

  const combinedFutureValue = calculateCombinedFutureValue().toFixed(2);
  const totalInvested = filteredInvestments.reduce(
    (acc, investment) => acc + calculateTotalInvested(investment),
    0
  );
  const gains = (combinedFutureValue - totalInvested).toFixed(2);

  const combinedInflationAdjustedValue = filteredInvestments
    .reduce(
      (acc, investment) =>
        acc +
        parseFloat(
          calculateInflationAdjustedValue(
            calculateFutureValueForInvestment(investment),
            investment.inflationRate,
            investment.periodMonths
          )
        ),
      0
    )
    .toFixed(2);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  const pieDataInvestments = filteredInvestments.map((investment) => ({
    name: investment.investmentName,
    value: parseFloat(calculateTotalInvested(investment)),
  }));

  const pieDataFutureValues = filteredInvestments.map((investment) => ({
    name: investment.investmentName,
    value: parseFloat(calculateFutureValueForInvestment(investment)),
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-2 md:p-10">
      <div className="container mx-auto max-w-5xl bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-6 text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Calculate Combined Investment Returns
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md  w-full md:w-auto"
          >
            Add New Investment
          </button>
          <button
            onClick={() => setShowResults(true)}
            className="bg-primary text-white px-4 py-2 rounded-md  w-full md:w-auto"
          >
            Calculate
          </button>
          <button
            onClick={clearAllInvestments}
            className="bg-primary text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Clear All
          </button>
        </div>

        <FilterByCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Show the investment form only when 'Add New Investment' is clicked */}
        {showForm && (
          <InvestmentForm
            newInvestment={newInvestment}
            setNewInvestment={setNewInvestment}
            addInvestment={addInvestment}
            categories={categories}
          />
        )}

        {/* Show results only when 'Calculate' is clicked */}
        {showResults && filteredInvestments.length > 0 && (
          <>
            <InvestmentTable
              filteredInvestments={filteredInvestments}
              editInvestment={editInvestment}
              removeInvestment={removeInvestment}
              calculateTotalInvested={calculateTotalInvested}
              calculateFutureValueForInvestment={
                calculateFutureValueForInvestment
              }
            />

            <InvestmentPieChart
              pieDataInvestments={pieDataInvestments}
              pieDataFutureValues={pieDataFutureValues}
              COLORS={COLORS}
            />

            <div className="mt-6">
              <Results
                futureValue={combinedFutureValue}
                totalInvested={totalInvested}
                gains={gains}
                inflationAdjustedFutureValue={combinedInflationAdjustedValue}
                mode="Combined"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CombinedInvestmentsPage;
