import Link from "next/link";

export default function InvestmentBasics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Investment Basics</h1>
      <p className="mb-4">
        Investing is the process of putting money into assets with the
        expectation of generating income or profit. There are various types of
        investments available, each with its own risk and return profile.
      </p>
      <p className="mb-4">
        This guide will help you understand the basics of different investment
        options and how to make informed decisions based on your financial
        goals.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Where to Invest</h2>
      <p className="mb-4">
        Explore the different types of investments available to you:
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <Link
            href="/learning/stocks"
            className="text-blue-600 hover:underline"
          >
            Stocks or Equities
          </Link>
          : Learn how owning a piece of a company can generate profits through
          dividends and capital gains.
        </li>
        <li className="mb-2">
          <Link
            href="/learning/bonds"
            className="text-blue-600 hover:underline"
          >
            Bonds or Fixed-Income Securities
          </Link>
          : Understand how lending money to a government or company can provide
          steady interest income.
        </li>
        <li className="mb-2">
          <Link
            href="/learning/mutual-funds"
            className="text-blue-600 hover:underline"
          >
            Mutual Funds
          </Link>
          : Discover how investing in a diversified portfolio managed by
          professionals can reduce risk.
        </li>
        <li className="mb-2">
          <Link
            href="/learning/real-estate"
            className="text-blue-600 hover:underline"
          >
            Real Estate
          </Link>
          : Learn about investing in physical properties that can generate
          rental income and appreciate in value.
        </li>
        <li className="mb-2">
          <Link
            href="/learning/commodities"
            className="text-blue-600 hover:underline"
          >
            Commodities
          </Link>
          : Explore the world of raw materials like gold, oil, and agricultural
          products.
        </li>
        <li className="mb-2">
          <Link
            href="/learning/cryptocurrency"
            className="text-blue-600 hover:underline"
          >
            Cryptocurrency
          </Link>
          : Understand digital currencies like Bitcoin and how they are changing
          the financial landscape.
        </li>
      </ul>
    </div>
  );
}
