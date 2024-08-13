"use client"; // Add this line at the very top

import React from "react";
import {
  FaOilCan,
  FaSeedling,
  FaPiggyBank,
  // FaGold,
  FaBolt,
  FaExclamationTriangle,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Commodities() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaMapMarkedAlt className="text-yellow-500" />
        <span>Commodities</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaOilCan className="text-blue-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          When you think of commodities, imagine the raw materials that power
          our world—everything from the coffee you drink in the morning to the
          gasoline in your car. Commodities are the building blocks of the
          global economy, and investing in them can be a way to hedge against
          inflation and diversify your portfolio.
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaSeedling className="text-green-500" />
          <span>What Are Commodities? 🌍</span>
        </h2>
        <p className="text-lg text-gray-700">
          Commodities are raw materials or primary agricultural products that
          can be bought and sold. They fall into two main categories: hard and
          soft commodities. Hard commodities are natural resources that are
          mined or extracted, such as gold, oil, and copper. Soft commodities
          are agricultural products or livestock, like wheat, coffee, and
          cattle.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Investors can buy physical commodities (like owning gold bars) or
          invest in commodity-related financial instruments like futures
          contracts, exchange-traded funds (ETFs), or stocks of companies that
          produce commodities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaPiggyBank className="text-purple-500" />
            <span>Types of Commodities 📦</span>
          </h3>
          <p className="text-lg text-gray-700">
            Commodities are typically divided into the following categories:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Energy:</strong> This includes oil, natural gas, and coal.
              Energy commodities are crucial to powering industries,
              transportation, and homes. The price of energy commodities can be
              influenced by geopolitical events, supply constraints, and changes
              in demand.
            </li>
            <li>
              <strong>Metals:</strong> Gold, silver, copper, and platinum fall
              into this category. Metals are used in everything from jewelry to
              electronics. Gold, in particular, is often seen as a safe haven
              asset during times of economic uncertainty.
            </li>
            <li>
              <strong>Agriculture:</strong> This includes crops like wheat,
              corn, coffee, and soybeans. Agricultural commodities are essential
              for feeding the world, and their prices can be affected by weather
              conditions, crop yields, and global demand.
            </li>
            <li>
              <strong>Livestock:</strong> Livestock commodities include cattle,
              hogs, and other animals raised for meat production. Like
              agricultural commodities, livestock prices can fluctuate based on
              supply and demand, as well as factors like disease outbreaks.
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaBolt className="text-yellow-500" />
            <span>Why Invest in Commodities? ⚡</span>
          </h3>
          <p className="text-lg text-gray-700">
            Commodities offer unique benefits as an investment:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Inflation Hedge:</strong> Commodities often rise in value
              when inflation increases, making them a good hedge against rising
              prices. For example, during periods of inflation, the price of oil
              and gold tends to go up.
            </li>
            <li>
              <strong>Diversification:</strong> Commodities can provide
              diversification to a portfolio that’s heavily weighted in stocks
              and bonds. They often move independently of traditional asset
              classes, providing a balance during market fluctuations.
            </li>
            <li>
              <strong>Global Demand:</strong> As the global population grows and
              economies develop, the demand for raw materials and energy
              increases. Investing in commodities can allow you to capitalize on
              this growing demand.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
          <FaExclamationTriangle className="text-red-500" />
          <span>The Risks of Commodity Investment ⚠️</span>
        </h3>
        <p className="text-lg text-gray-700">
          Investing in commodities comes with risks that investors should be
          aware of:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
          <li>
            <strong>Volatility:</strong> Commodity prices can be highly
            volatile. For example, oil prices can swing dramatically based on
            geopolitical tensions, changes in supply, or shifts in demand.
          </li>
          <li>
            <strong>Supply and Demand Risks:</strong> Commodity prices are
            heavily influenced by supply and demand. Weather conditions, natural
            disasters, and political instability can disrupt supply, leading to
            price spikes or drops.
          </li>
          <li>
            <strong>Leverage Risk:</strong> Many investors trade commodities
            using leverage, which amplifies both gains and losses. While this
            can lead to significant profits, it can also result in substantial
            losses if the market moves against you.
          </li>
          <li>
            <strong>Storage and Insurance Costs:</strong> If you choose to
            invest in physical commodities, such as gold or oil, you’ll need to
            consider the costs of storage and insurance. These costs can eat
            into your overall returns.
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          {/* <FaGold className="text-yellow-500" /> */}
          <span>Fun Example: The Gold Rush 🌟</span>
        </h3>
        <p className="text-lg text-gray-700">
          Picture the California Gold Rush of the 1800s. Thousands of people
          flocked to California in search of gold, hoping to strike it rich.
          Today, gold remains a popular commodity for investors, especially
          during times of economic uncertainty. While you won’t be panning for
          gold in a river, investing in gold can be a way to protect your wealth
          during turbulent times.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          {/* <FaMapMarkedAlt className="text-green-500" /> */}
          <span>Getting Started with Commodity Investment 🚀</span>
        </h3>
        <p className="text-lg text-gray-700">
          If you’re interested in commodities, start by researching the specific
          markets you’re interested in, such as energy, metals, or agriculture.
          Understand the factors that drive supply and demand for each
          commodity.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Consider whether you want to invest in physical commodities,
          commodity-related stocks, or financial instruments like futures or
          ETFs. Each option comes with different levels of risk and potential
          reward.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Finally, remember that commodities are typically more volatile than
          stocks and bonds. They can be a valuable part of a diversified
          portfolio, but they’re not without risk. Make sure to invest wisely
          and keep an eye on market trends.
        </p>
      </div>
    </div>
  );
}
