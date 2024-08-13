import React from "react";
import {
  FaChartLine,
  FaCoins,
  FaBalanceScale,
  FaUserCheck,
  FaLightbulb,
  FaPiggyBank,
} from "react-icons/fa";

export default function InvestmentBasics() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaLightbulb className="text-yellow-500" />
        <span>Investment Basics</span>
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Investing might seem complex, but it's one of the key steps toward
        financial independence and wealth building. By understanding the basics,
        you'll feel more confident about getting started.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-inner mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaChartLine className="text-blue-500" />
          <span>How to Start Investing</span>
        </h2>
        <p className="mb-4 text-gray-700">
          Investing is about aligning your financial goals with the right
          strategies to help you achieve them. It’s essential to understand your
          comfort with risk and how to manage it over time. Once you're clear on
          your goals, it’s time to jump in—whether on your own or with help from
          a financial advisor. Let’s break down the key steps to get started:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaPiggyBank className="text-green-500" />
            <span>1. Decide on Your Investment Goals</span>
          </h3>
          <p className="mb-4 text-gray-700">
            Before you dive into investing, it’s crucial to define your goals.
            Are you saving for retirement, a home, or something else? Knowing
            your goals helps narrow down your investment choices and simplifies
            the process.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaCoins className="text-yellow-500" />
            <span>2. Select Your Investment Accounts</span>
          </h3>
          <p className="mb-4 text-gray-700">
            After setting your goals, choose the right investment accounts to
            match them. A brokerage account gives you flexibility, allowing you
            to buy and sell stocks, mutual funds, and ETFs without the
            restrictions of retirement accounts.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaBalanceScale className="text-red-500" />
            <span>3. Decide How Much to Invest</span>
          </h3>
          <p className="mb-4 text-gray-700">
            Determine how much money you can invest. A general rule is to aim
            for investing 15% of your income, but you can start with smaller
            amounts and gradually increase over time.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaUserCheck className="text-blue-500" />
            <span>4. Understand Your Risk Tolerance</span>
          </h3>
          <p className="mb-4 text-gray-700">
            Risk tolerance is your comfort level with the ups and downs of the
            market. It’s important to choose investments that match your
            willingness and ability to take risks.
          </p>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          A Fun Story: The Tale of Sunny and Her Lemonade Stand
        </h3>
        <p className="mb-4 text-gray-700">
          Let's imagine a simple story. Sunny, a young girl, decided to start a
          lemonade stand in her neighborhood to make some extra pocket money. At
          first, she used her savings to buy lemons, sugar, and cups. She made a
          small profit and saved it. But Sunny didn’t stop there—she wanted to
          grow her business.
        </p>
        <p className="mb-4 text-gray-700">
          She invested in better ingredients and marketing, like a cute sign,
          and soon enough, more people were buying her lemonade. She made enough
          money to save up for a new bike. Sunny learned that by taking a
          calculated risk, she could grow her small business and reach her goals
          faster. Just like Sunny, when you invest your money, you're taking a
          calculated risk to grow your wealth over time.
        </p>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          5. Build and Monitor Your Portfolio
        </h3>
        <p className="mb-4 text-gray-700">
          Once you’ve determined your goals, assessed your risk, and decided how
          much to invest, it’s time to build your portfolio. Regularly monitor
          your investments and rebalance your portfolio to stay aligned with
          your financial goals.
        </p>
      </div>
    </div>
  );
}
