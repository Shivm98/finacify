import React from "react";

export const Results = ({
  futureValue,
  inflationAdjustedFutureValue,
  totalInvested,
  gains,
  calculateRequiredMonthlyInvestment,
  mode,
}) => {
  const formatNumber = (number) => {
    if (number >= 1e7) {
      return (number / 1e7).toFixed(2) + " Cr";
    } else if (number >= 1e5) {
      return (number / 1e5).toFixed(2) + " Lac";
    } else {
      return new Intl.NumberFormat("en-IN").format(number);
    }
  };

  const Tooltip = ({ children, text }) => (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex justify-center w-64 text-center">
        <span className="bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg">
          {text}
        </span>
        <div className="absolute h-0 w-0 border-t-8 border-t-gray-800 border-x-8 border-x-transparent bottom-[-8px]"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-md font-semibold mb-4 text-gray-700 dark:text-white md:text-lg">
        Results
      </h3>

      {mode === "Goal" && (
        <div className="flex justify-between mb-4">
          <span className="flex gap-2 text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
            Required Monthly Investment
            <Tooltip text="This is how much you need to save every month to reach your goal.">
              <span className="ml-1 text-blue-600 cursor-pointer">[?]</span>
            </Tooltip>
          </span>
          <span className="text-md text-gray-900 dark:text-white md:text-base">
            {formatNumber(calculateRequiredMonthlyInvestment())}
          </span>
        </div>
      )}

      <div className="flex justify-between mb-4">
        <span className="flex gap-2 text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          Total Invested
          <Tooltip text="The total amount of money you have put into this investment.">
            <span className="ml-1 text-blue-600 cursor-pointer">[?]</span>
          </Tooltip>
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(totalInvested)}
        </span>
      </div>

      <div className="flex justify-between mb-4">
        <span className="flex gap-2 text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          Interest Earned
          <Tooltip text="The profit you have made from this investment, on top of what you invested.">
            <span className="ml-1 text-blue-600 cursor-pointer">[?]</span>
          </Tooltip>
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(gains)}
        </span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between mb-4">
        <span className="flex gap-2 text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          {mode === "Goal" ? "Goal Amount" : "Future Value"}
          <Tooltip
            text={
              mode === "Goal"
                ? "The amount you aim to have in the future."
                : "The estimated value of your investment in the future."
            }
          >
            <span className="ml-1 text-blue-600 cursor-pointer">[?]</span>
          </Tooltip>
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(futureValue)}
        </span>
      </div>

      <div className="flex justify-between mb-4">
        <span className="flex gap-2 text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          Inflation-Adjusted Value
          <Tooltip text="The value of your investment after accounting for inflation, showing what it will be worth in today's money.">
            <span className="ml-1 text-blue-600 cursor-pointer">[?]</span>
          </Tooltip>
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(inflationAdjustedFutureValue)}
        </span>
      </div>
    </div>
  );
};
