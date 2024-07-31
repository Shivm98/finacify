import React from "react";

export const Results = ({
  futureValue,
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

  return (
    <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-md font-semibold mb-4 text-gray-700 dark:text-white md:text-lg">
        Results
      </h3>
      {mode === "Goal" && (
        <div className="flex justify-between ">
          <span className="text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
            Required Monthly Investment
          </span>
          <span className="text-md text-gray-900 dark:text-white md:text-base">
            {formatNumber(calculateRequiredMonthlyInvestment())}
          </span>
        </div>
      )}
      <div className="flex justify-between ">
        <span className="text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          Total Invested:
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(totalInvested)}
        </span>
      </div>
      <div className="flex justify-between  mb-1 md:mb-2">
        <span className="text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          Interest Earned:
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(gains)}
        </span>
      </div>
      <hr />
      <div className="flex justify-between mt-1 md:mt-2">
        <span className="text-sm md:text-md text-gray-600 dark:text-gray-300 md:text-base">
          {mode === "Goal" ? "Goal Amount:" : "Future Value:"}
        </span>
        <span className="text-md text-gray-900 dark:text-white md:text-base">
          {formatNumber(futureValue)}
        </span>
      </div>
    </div>
  );
};
