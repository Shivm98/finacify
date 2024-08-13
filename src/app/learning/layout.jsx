"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import LearnMoreLinks from "@/components/learning/LearnMoreLinks"; // Import the LearnMoreLinks component

export default function InvestmentsLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar only visible on screens larger than lg (1024px and above) */}
      <aside
        className={`hidden lg:block fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 p-4 lg:static lg:w-64 lg:flex lg:flex-col`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Investment Basics
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/learning"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/learning/stocks"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Stocks or Equities
              </Link>
            </li>
            <li>
              <Link
                href="/learning/bonds"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Bonds or Fixed-Income Securities
              </Link>
            </li>
            <li>
              <Link
                href="/learning/mutual-funds"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Mutual Funds
              </Link>
            </li>
            <li>
              <Link
                href="/learning/real-estate"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="/learning/commodities"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Commodities
              </Link>
            </li>
            <li>
              <Link
                href="/learning/cryptocurrency"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Cryptocurrency
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:ml-64 pt-16">
        {children}
        <LearnMoreLinks /> {/* Render the LearnMoreLinks component */}
      </main>
    </div>
  );
}
