import React from "react";

export const Results = ({
  futureValue,
  totalInvested,
  gains,
  calculateRequiredMonthlyInvestment,
  mode,
}) => {
  // const formatNumber = (number) => {
  //   return new Intl.NumberFormat("en-IN").format(number);
  // };

  const formatNumber = (number) => {
    if (number >= 1e7) {
      return (number / 1e7).toFixed(2) + " Cr";
    } else if (number >= 1e5) {
      return (number / 1e5).toFixed(2) + " Lac";
    } else {
      return new Intl.NumberFormat("en-IN").format(number);
    }
  };
  // if (mode == "Goal") {
  //   const requiredMonthlyInvestment = calculateRequiredMonthlyInvestment();
  // }

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-md font-semibold mb-4 text-gray-700 dark:text-white">
        Results
      </h3>
      {mode == "Goal" && (
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Required Monthly Investment
          </span>
          <span className="text-gray-900 dark:text-white">
            {formatNumber(calculateRequiredMonthlyInvestment())}
          </span>
        </div>
      )}

      <div className="flex justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Total Invested:
        </span>
        <span className="text-gray-900 dark:text-white">
          {formatNumber(totalInvested)}
        </span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Interest Earned:
        </span>
        <span className="text-gray-900 dark:text-white">
          {formatNumber(gains)}
        </span>
      </div>
      <hr />
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {mode == "Goal" ? "Goal Amount:" : "Future Value:"}
        </span>
        <span className="text-gray-900 dark:text-white">
          {formatNumber(futureValue)}
        </span>
      </div>
    </div>
  );
};
