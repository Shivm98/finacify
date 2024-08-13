import React from "react";
import {
  FaRegHandshake,
  FaUniversity,
  FaBuilding,
  FaLandmark,
  FaRegMoneyBillAlt,
  FaShieldAlt,
  FaLifeRing,
} from "react-icons/fa";

export default function Bonds() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaRegHandshake className="text-green-500" />
        <span>Bonds or Fixed-Income Securities</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaRegMoneyBillAlt className="text-blue-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          Imagine you lend your friend $100, and they promise to pay you back
          with interest. That’s essentially what happens when you buy a
          bond—except instead of a friend, you’re lending money to a government
          or company. Bonds are a way for these entities to raise money, and in
          return, they pay you interest over time.
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaUniversity className="text-purple-500" />
          <span>What Are Bonds? 💵</span>
        </h2>
        <p className="text-lg text-gray-700">
          Bonds are debt securities. When you purchase a bond, you are
          effectively lending money to the issuer (a government, municipality,
          or corporation) for a set period. In exchange, the issuer agrees to
          pay you interest (known as the "coupon") at regular intervals and to
          return your principal (the amount you invested) when the bond matures.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Think of it like this: You’re the bank, and the issuer is borrowing
          from you. They pay you interest as a thank you for the loan, and once
          the bond's term is up, you get your original investment back.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaLandmark className="text-yellow-500" />
            <span>Types of Bonds 🏦</span>
          </h3>
          <p className="text-lg text-gray-700">
            Bonds come in several varieties, each serving a different purpose:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Government Bonds:</strong> Issued by governments, these
              are generally considered very safe investments. U.S. Treasury
              Bonds, for example, are backed by the full faith and credit of the
              U.S. government, making them a go-to choice for conservative
              investors.
            </li>
            <li>
              <strong>Corporate Bonds:</strong> Companies issue bonds to raise
              money for various projects, such as expanding their operations.
              These bonds offer higher interest rates than government bonds but
              come with more risk since a company could default on its debt.
            </li>
            <li>
              <strong>Municipal Bonds:</strong> Issued by states, cities, or
              other local governments, these bonds often fund public projects
              like schools or highways. The interest earned on municipal bonds
              is usually tax-exempt, making them attractive to investors in
              higher tax brackets.
            </li>
            <li>
              <strong>Zero-Coupon Bonds:</strong> These bonds don’t pay regular
              interest. Instead, they are sold at a deep discount and pay the
              full face value at maturity. For example, you might buy a bond for
              $800 that matures at $1,000 in 10 years. You don’t receive
              interest payments along the way, but you do make a profit at
              maturity.
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaShieldAlt className="text-red-500" />
            <span>Why Invest in Bonds? 🌱</span>
          </h3>
          <p className="text-lg text-gray-700">
            Bonds are a popular choice for many investors because they offer:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Steady Income:</strong> Bonds provide regular interest
              payments, making them a reliable source of income. This can be
              especially useful for retirees or those looking to supplement
              their income.
            </li>
            <li>
              <strong>Lower Risk:</strong> Compared to stocks, bonds are
              generally less risky. They’re considered a safer investment,
              especially government bonds, which are backed by the government.
            </li>
            <li>
              <strong>Diversification:</strong> Adding bonds to your investment
              portfolio can help balance out riskier investments like stocks.
              Bonds tend to be less volatile, providing stability during market
              downturns.
            </li>
            <li>
              <strong>Predictable Returns:</strong> Since bonds pay a fixed
              interest rate, you know exactly how much income to expect. This
              predictability can be comforting in an uncertain market.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
          <FaLifeRing className="text-blue-500" />
          <span>The Risks of Investing in Bonds ⚠️</span>
        </h3>
        <p className="text-lg text-gray-700">
          While bonds are generally safer than stocks, they’re not without
          risks:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
          <li>
            <strong>Interest Rate Risk:</strong> If interest rates rise,
            existing bonds with lower rates become less valuable, since new
            bonds are issued with higher rates. This can reduce the market value
            of your bonds if you need to sell before maturity.
          </li>
          <li>
            <strong>Credit Risk:</strong> There’s always the possibility that
            the bond issuer could default on its payments. This risk is higher
            with corporate bonds compared to government bonds.
          </li>
          <li>
            <strong>Inflation Risk:</strong> If inflation rises, the fixed
            interest payments from bonds may not keep up with the rising cost of
            living, reducing your purchasing power.
          </li>
          <li>
            <strong>Reinvestment Risk:</strong> If interest rates drop, you
            might have to reinvest bond payments at a lower rate, which could
            reduce your overall income.
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaLifeRing className="text-yellow-500" />
          <span>Fun Example: The Safety Net 🕸️</span>
        </h3>
        <p className="text-lg text-gray-700">
          Imagine you’re walking a tightrope—pretty risky, right? Now, picture a
          safety net underneath you. That’s what bonds do for your investment
          portfolio. While stocks might have you soaring to great heights, bonds
          are there to catch you if things go wrong. They provide stability and
          a steady income, so you can take on more risk with your other
          investments.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaLandmark className="text-green-500" />
          <span>Getting Started with Bonds 🚀</span>
        </h3>
        <p className="text-lg text-gray-700">
          If you’re considering bonds, start by deciding how much of your
          portfolio you want to allocate to them. For those closer to
          retirement, a larger portion in bonds might make sense for the
          stability they offer.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Look at the bond’s rating to assess its risk. Agencies like Moody’s or
          Standard & Poor’s rate bonds based on the issuer’s creditworthiness.
          Higher-rated bonds are safer but typically offer lower returns.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Finally, consider the maturity of the bond. Short-term bonds are less
          sensitive to interest rate changes, while long-term bonds might offer
          higher yields but come with more risk.
        </p>
      </div>
    </div>
  );
}
