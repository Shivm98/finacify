import React from "react";
import {
  FaPiggyBank,
  FaHandsHelping,
  FaBalanceScale,
  FaLightbulb,
  FaHorseHead,
  FaCoins,
} from "react-icons/fa";

export default function MutualFunds() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaPiggyBank className="text-green-500" />
        <span>Mutual Funds</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaHandsHelping className="text-blue-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          Imagine you want to invest in a variety of things—like stocks, bonds,
          and maybe even a bit of real estate—but you don't have the time or
          expertise to manage them all. What if you could pool your money with
          others, hire a professional to manage it for you, and still get a
          slice of the investment pie? That’s what Mutual Funds are all about!
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaLightbulb className="text-yellow-500" />
          <span>What Exactly Is a Mutual Fund? 🤔</span>
        </h2>
        <p className="text-lg text-gray-700">
          Think of a Mutual Fund as a big basket filled with various
          investments. When you buy a share of a mutual fund, you're buying a
          piece of that basket. The best part? A professional fund manager
          handles all the buying and selling within the basket, so you don't
          have to worry about the day-to-day decisions.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Let’s say you and your friends each throw $100 into a pot. You hire a
          smart investor to decide how to spend it. They might buy some Apple
          stock, a few government bonds, and maybe a bit of real estate. Now,
          instead of just owning a single stock, you all own a tiny piece of
          each investment the fund manager chooses. That’s the beauty of a
          mutual fund—diversification with just one purchase!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaBalanceScale className="text-red-500" />
            <span>Types of Mutual Funds</span>
          </h3>
          <p className="text-lg text-gray-700">
            There are many types of mutual funds, each designed to fit different
            investment goals. Here are the most common ones:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Equity Funds:</strong> Mainly invest in stocks. If you're
              looking for growth and are willing to take on a bit of risk,
              equity funds could be your go-to. They aim for higher returns.
            </li>
            <li>
              <strong>Bond Funds:</strong> These funds invest in bonds. They're
              generally safer and provide regular income—think of them as the
              reliable friend who always shows up on time.
            </li>
            <li>
              <strong>Balanced Funds:</strong> Can't decide between stocks and
              bonds? Balanced funds mix the two, offering a blend of growth and
              income.
            </li>
            <li>
              <strong>Index Funds:</strong> These funds aim to replicate the
              performance of a specific index, like the S&P 500. They're often
              cheaper to manage and are a cost-effective way to invest broadly.
            </li>
            <li>
              <strong>Money Market Funds:</strong> The safest of the bunch,
              investing in short-term, low-risk securities. They’re a great
              place to park your cash if you want to avoid risk.
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaCoins className="text-purple-500" />
            <span>Why Choose Mutual Funds?</span>
          </h3>
          <p className="text-lg text-gray-700">
            Mutual funds offer several benefits, especially for those new to
            investing or who prefer a hands-off approach:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Diversification:</strong> With just one purchase, you get
              exposure to a wide range of investments. It’s like a buffet where
              you can taste a little bit of everything without committing to one
              dish.
            </li>
            <li>
              <strong>Professional Management:</strong> A team of experts
              manages your investments, so you don't have to worry about the
              details.
            </li>
            <li>
              <strong>Accessibility:</strong> Easy to buy and sell, with the
              ability to invest small amounts, making them accessible even if
              you're just starting.
            </li>
            <li>
              <strong>Reinvestment:</strong> Dividends and interest earned can
              be automatically reinvested to buy more shares, allowing your
              investment to grow over time.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Fun Example: The Index Fund Advantage 🏇
        </h3>
        <p className="text-lg text-gray-700">
          Imagine you're trying to predict which horse will win a race. It's
          tough, right? Now imagine instead of betting on one horse, you bet on
          all of them. If any horse wins, you win! That's similar to investing
          in an index fund. By investing in an index fund that tracks the S&P
          500, you're essentially betting on all 500 companies. If the overall
          market goes up, so does your investment.
        </p>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Getting Started with Mutual Funds 🌱
        </h3>
        <p className="text-lg text-gray-700">
          Ready to dive into mutual funds? Start by figuring out your investment
          goals. Are you looking for growth, income, or a mix of both? Once you
          know what you’re aiming for, you can choose a mutual fund that aligns
          with your goals.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Next, consider the fees. Look for funds with low expense ratios,
          especially if you’re investing for the long term. High fees can eat
          into your returns over time.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Finally, open a brokerage account or invest directly through a mutual
          fund company. Start with an amount you’re comfortable with, and
          remember, mutual funds are a long-term investment. So sit back, relax,
          and let your investment grow! 📈
        </p>
      </div>
    </div>
  );
}
