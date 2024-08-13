import React from "react";
import { FaHome, FaBuilding, FaLandmark, FaChartLine } from "react-icons/fa";

export default function RealEstate() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaHome className="text-red-500" />
        <span>Real Estate</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaBuilding className="text-blue-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          Have you ever dreamt of owning a piece of land, a house, or maybe a
          shiny office building in the middle of a bustling city? That’s what
          Real Estate investment is all about! It’s not just about buying a
          place to live; it’s about putting your money into physical properties
          that can grow in value and even provide a steady income.
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaLandmark className="text-yellow-500" />
          <span>What Is Real Estate Investment? 🏡</span>
        </h2>
        <p className="text-lg text-gray-700">
          Real estate investment involves purchasing property to generate income
          or profit. This could be anything from a small apartment to a large
          commercial building. When you buy real estate, you own a tangible
          asset—something you can see, touch, and visit. Unlike stocks or bonds,
          real estate doesn’t just sit in a digital account; it’s a physical
          space that has the potential to appreciate over time.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          There are several ways to invest in real estate. You can buy
          properties to rent out, purchase land to develop, or even invest in
          real estate through a Real Estate Investment Trust (REIT), which is
          like a mutual fund but for properties!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaHome className="text-green-500" />
            <span>Types of Real Estate Investments</span>
          </h3>
          <p className="text-lg text-gray-700">
            There are various forms of real estate investments, each catering to
            different investment goals. Here are the main types:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Residential Real Estate:</strong> This includes houses,
              apartments, and condos. You can buy a home to live in, rent out to
              tenants, or flip for a profit after renovations. Residential real
              estate is often the first type of property investors consider.
            </li>
            <li>
              <strong>Commercial Real Estate:</strong> This category includes
              office buildings, retail spaces, and industrial properties.
              Investing in commercial real estate can provide a steady income
              from renting to businesses. It’s like being the landlord of your
              favorite store or company office!
            </li>
            <li>
              <strong>Land:</strong> Buying raw land can be a speculative
              investment. The idea is to purchase land in a developing area and
              sell it for a profit as demand increases. Alternatively, you might
              develop the land into a residential or commercial property.
            </li>
            <li>
              <strong>REITs:</strong> Real Estate Investment Trusts allow you to
              invest in real estate without buying physical property. REITs are
              companies that own, operate, or finance income-producing real
              estate. You can buy shares of a REIT just like stocks, making real
              estate investment accessible to everyone.
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaChartLine className="text-purple-500" />
            <span>Why Invest in Real Estate?</span>
          </h3>
          <p className="text-lg text-gray-700">
            Real estate is a popular investment for many reasons:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Tangible Asset:</strong> Real estate is a physical asset
              that you can see and touch. It’s something you can use or rent
              out, making it different from stocks or bonds.
            </li>
            <li>
              <strong>Income Generation:</strong> Renting out properties can
              provide a steady stream of income. Whether it’s residential rent
              or commercial lease, real estate can be a reliable source of cash
              flow.
            </li>
            <li>
              <strong>Appreciation:</strong> Over time, the value of real estate
              tends to increase, especially in growing areas. This appreciation
              can lead to significant profits if you decide to sell the
              property.
            </li>
            <li>
              <strong>Inflation Hedge:</strong> Real estate often keeps pace
              with inflation, meaning that as the cost of living rises, so do
              rental incomes and property values. It’s a way to protect your
              money from losing value over time.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Fun Example: The Rental Property 🏢
        </h3>
        <p className="text-lg text-gray-700">
          Imagine you buy a small apartment in a popular vacation spot. You
          decide to rent it out to tourists. Not only do you earn rental income,
          but the property’s value also increases over the years. Later, you
          could sell the apartment for a profit or continue earning steady
          rental income. This is how real estate can build wealth over time.
        </p>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Getting Started with Real Estate 🌱
        </h3>
        <p className="text-lg text-gray-700">
          Thinking about diving into real estate? Start by researching the
          market. Look for areas with growth potential—places where new
          businesses are opening, or infrastructure is being developed. Decide
          whether you want to invest in residential or commercial properties.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          If buying property directly seems too daunting, consider investing in
          REITs. They offer a way to benefit from real estate without the hassle
          of managing a physical property.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Finally, remember that real estate is a long-term investment. It might
          take time for your property to appreciate in value, but with patience,
          real estate can be a powerful tool for building wealth. 🏘️
        </p>
      </div>
    </div>
  );
}
