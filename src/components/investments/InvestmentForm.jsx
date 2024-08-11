"use client";
import React from "react";
import { SliderInput } from "@/components/calculator/SliderInput";

const InvestmentForm = ({
  newInvestment,
  setNewInvestment,
  addInvestment,
  categories,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold mb-4 text-gray-600 dark:text-gray-300">
        New Investment
      </h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Investment Name
        </label>
        <input
          type="text"
          value={newInvestment.investmentName}
          onChange={(e) =>
            setNewInvestment({
              ...newInvestment,
              investmentName: e.target.value,
            })
          }
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={newInvestment.category}
          onChange={(e) =>
            setNewInvestment({ ...newInvestment, category: e.target.value })
          }
        >
          {categories.slice(1).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <SliderInput
        label="Investment Amount"
        value={newInvestment.amount}
        setValue={(value) =>
          setNewInvestment({ ...newInvestment, amount: value })
        }
        min={0}
        max={1000000}
        step={1}
      />
      <SliderInput
        label="Investment Period (months)"
        value={newInvestment.periodMonths}
        setValue={(value) =>
          setNewInvestment({ ...newInvestment, periodMonths: value })
        }
        min={0}
        max={600} // 50 years in months
        step={1}
      />
      <SliderInput
        label="Growth Rate (%)"
        value={newInvestment.growthRate}
        setValue={(value) =>
          setNewInvestment({ ...newInvestment, growthRate: value })
        }
        min={0}
        max={70}
        step={0.1}
      />
      <SliderInput
        label="Inflation Rate (%)"
        value={newInvestment.inflationRate}
        setValue={(value) =>
          setNewInvestment({ ...newInvestment, inflationRate: value })
        }
        min={0}
        max={20}
        step={0.1}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Investment Type
        </label>
        <select
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={newInvestment.type}
          onChange={(e) =>
            setNewInvestment({ ...newInvestment, type: e.target.value })
          }
        >
          <option value="SIP">SIP</option>
          <option value="Lumpsum">Lumpsum</option>
        </select>
      </div>
      <button
        onClick={addInvestment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
      >
        Add Investment
      </button>
    </div>
  );
};

export default InvestmentForm;
