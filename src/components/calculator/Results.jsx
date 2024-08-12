import React from "react";
import { FaInfoCircle } from "react-icons/fa";

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
      <h3 className="text-lg font-semibold mb-6 text-gray-700 dark:text-white">
        Results
      </h3>

      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col space-y-4">
          {mode === "Goal" && (
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                Required Monthly Investment
                <Tooltip text="This is how much you need to save every month to reach your goal.">
                  <FaInfoCircle className="text-gray-500" />
                </Tooltip>
              </span>
              <span className="text-md font-semibold text-gray-700 dark:text-white">
                {formatNumber(calculateRequiredMonthlyInvestment())}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              Total Invested
              <Tooltip text="The total amount of money you have put into this investment.">
                <FaInfoCircle className="text-gray-500" />
              </Tooltip>
            </span>
            <span className="text-md font-semibold text-gray-700 dark:text-white">
              {formatNumber(totalInvested)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              Interest Earned
              <Tooltip text="The profit you have made from this investment, on top of what you invested.">
                <FaInfoCircle className="text-gray-500" />
              </Tooltip>
            </span>
            <span className="text-md font-semibold text-gray-700 dark:text-white">
              {formatNumber(gains)}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 border-l border-dotted border-gray-400 pl-6">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              {mode === "Goal" ? "Goal Amount" : "Future Value"}
              <Tooltip
                text={
                  mode === "Goal"
                    ? "The amount you aim to have in the future."
                    : "The estimated value of your investment in the future."
                }
              >
                <FaInfoCircle className="text-gray-500" />
              </Tooltip>
            </span>
            <span className="text-md font-semibold text-gray-700 dark:text-white">
              {formatNumber(futureValue)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              Inflation-Adjusted Value
              <Tooltip text="The value of your investment after accounting for inflation, showing what it will be worth in today's money.">
                <FaInfoCircle className="text-gray-500" />
              </Tooltip>
            </span>
            <span className="text-md font-semibold text-gray-700 dark:text-white">
              {formatNumber(inflationAdjustedFutureValue)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
