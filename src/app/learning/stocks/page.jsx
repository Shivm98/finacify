import React from "react";
import {
  FaChartLine,
  FaBalanceScale,
  FaPiggyBank,
  FaAppleAlt,
  FaSeedling,
  FaSmileWink,
} from "react-icons/fa";

export default function Stocks() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaChartLine className="text-blue-500" />
        <span>Stocks or Equities</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaSmileWink className="text-yellow-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          Imagine you walk into your favorite coffee shop—let's call it{" "}
          <span className="font-semibold text-indigo-600">
            "Bean's Paradise"
          </span>
          . Now, what if I told you that you could actually own a piece of
          Bean's Paradise? That's what happens when you buy stocks or
          equities—you're buying a tiny slice of ownership in a company!
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaSeedling className="text-green-500" />
          <span>How Do Stocks Work? 🤔</span>
        </h2>
        <p className="text-lg text-gray-700">
          When you buy a stock, you become a "shareholder" in that company,
          which means you own a fraction of it. Imagine Bean's Paradise decides
          to sell 1,000 shares of its company. If you buy 10 shares, you own 1%
          of the company. Pretty cool, right? 😎
        </p>
        <p className="text-lg text-gray-700 mt-4">
          As a shareholder, you’re entitled to a portion of the company’s
          profits, often paid out as <strong>dividends</strong>. And if Bean's
          Paradise becomes super popular, the value of your shares could
          skyrocket—this is called <strong>capital appreciation</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaBalanceScale className="text-red-500" />
            <span>Types of Stocks</span>
          </h3>
          <p className="text-lg text-gray-700">
            Stocks mainly come in two flavors: <strong>Common</strong> and{" "}
            <strong>Preferred</strong>.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Common Stock:</strong> You get voting rights and potential
              dividends. But be warned—if things go south, your stock's value
              could drop, and dividends might disappear. 🧐
            </li>
            <li>
              <strong>Preferred Stock:</strong> No voting rights, but you’re
              first in line for dividends. If Bean's Paradise ever closes down,
              preferred shareholders get paid before common stockholders. 💼
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaPiggyBank className="text-yellow-500" />
            <span>Why Invest in Stocks?</span>
          </h3>
          <p className="text-lg text-gray-700">
            Stocks can be a thrilling rollercoaster ride—with the potential for
            high rewards! Here’s why people love investing in them:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>High Returns:</strong> Historically, stocks have offered
              higher returns than most other investments. 📈
            </li>
            <li>
              <strong>Ownership:</strong> You can proudly say you own a piece of
              some of the world's biggest companies—or even your favorite coffee
              shop! ☕️
            </li>
            <li>
              <strong>Dividends:</strong> Some stocks pay you just for holding
              them! Use this extra income as you like, or reinvest it to grow
              your wealth. 💸
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          A Fun Story: The Apple 🍏 Adventure
        </h3>
        <p className="text-lg text-gray-700">
          Let’s imagine you bought 100 shares of Apple stock back in 2000. Back
          then, Apple was just starting to make waves with its iMac computers.
          Fast forward to today, and Apple is a tech giant known for its
          iPhones, iPads, and more. Your 100 shares have grown significantly in
          value, and if you’d held onto them, you’d have seen a massive return
          on your investment. This is the magic of investing in strong companies
          and holding for the long term!
        </p>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Getting Started with Stock Investing 🌱
        </h3>
        <p className="text-lg text-gray-700">
          Ready to start your own investment journey? Begin by researching
          companies you believe in—maybe ones whose products you use every day.
          Open a brokerage account to buy and sell stocks, but remember to
          diversify—don’t put all your eggs in one basket! 🧺
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Most importantly, invest with money you won’t need in the short term.
          Stocks are best for long-term growth, so think of them as planting a
          tree—it takes time to see it grow, but when it does, the rewards are
          sweet! 🌳🍎
        </p>
      </div>
    </div>
  );
}
