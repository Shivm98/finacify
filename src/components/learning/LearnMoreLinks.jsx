"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current path
import {
  FaChartLine,
  FaBalanceScale,
  FaPiggyBank,
  FaHome,
  FaCoins,
  FaBitcoin,
} from "react-icons/fa"; // Import relevant icons

const LearnMoreLinks = () => {
  const pathname = usePathname(); // Get the current page path

  // Define all the links for learning pages with corresponding icons
  const links = [
    {
      href: "/learning/stocks",
      label: "Stocks or Equities",
      icon: <FaChartLine className="text-blue-500 w-6 h-6" />,
    },
    {
      href: "/learning/bonds",
      label: "Bonds or Fixed-Income Securities",
      icon: <FaBalanceScale className="text-green-500 w-6 h-6" />,
    },
    {
      href: "/learning/mutual-funds",
      label: "Mutual Funds",
      icon: <FaPiggyBank className="text-yellow-500 w-6 h-6" />,
    },
    {
      href: "/learning/real-estate",
      label: "Real Estate",
      icon: <FaHome className="text-red-500 w-6 h-6" />,
    },
    {
      href: "/learning/commodities",
      label: "Commodities",
      icon: <FaCoins className="text-purple-500 w-6 h-6" />,
    },
    {
      href: "/learning/cryptocurrency",
      label: "Cryptocurrency",
      icon: <FaBitcoin className="text-orange-500 w-6 h-6" />,
    },
  ];

  // Filter out the current page
  const filteredLinks = links.filter((link) => link.href !== pathname);

  return (
    <div className="lg:hidden mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Explore More Topics
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {filteredLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg transition-transform transform hover:scale-105 active:scale-95">
              <div className="mr-4">{link.icon}</div>
              <div>
                <p className="text-gray-800 font-medium">{link.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnMoreLinks;
