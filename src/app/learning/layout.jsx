"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import LearnMoreLinks from "@/components/learning/LearnMoreLinks"; // Import the LearnMoreLinks component

export default function InvestmentsLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Investment Basics</h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            {[
              { href: "/learning", label: "Overview" },
              { href: "/learning/stocks", label: "Stocks or Equities" },
              {
                href: "/learning/bonds",
                label: "Bonds or Fixed-Income Securities",
              },
              { href: "/learning/mutual-funds", label: "Mutual Funds" },
              { href: "/learning/real-estate", label: "Real Estate" },
              { href: "/learning/commodities", label: "Commodities" },
              { href: "/learning/cryptocurrency", label: "Cryptocurrency" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ease-in-out"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
        <LearnMoreLinks /> {/* Render the LearnMoreLinks component */}
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
