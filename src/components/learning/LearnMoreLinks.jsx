"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current path

const LearnMoreLinks = () => {
  const pathname = usePathname(); // Get the current page path

  // Define all the links for learning pages
  const links = [
    { href: "/learning/stocks", label: "Stocks or Equities" },
    { href: "/learning/bonds", label: "Bonds or Fixed-Income Securities" },
    { href: "/learning/mutual-funds", label: "Mutual Funds" },
    { href: "/learning/real-estate", label: "Real Estate" },
    { href: "/learning/commodities", label: "Commodities" },
    { href: "/learning/cryptocurrency", label: "Cryptocurrency" },
  ];

  return (
    <div className="lg:hidden mt-8">
      <h2 className="text-xl font-semibold mb-4">Learn More</h2>
      <ul className="space-y-2">
        {links
          .filter((link) => link.href !== pathname) // Exclude the current page
          .map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-blue-600 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LearnMoreLinks;
