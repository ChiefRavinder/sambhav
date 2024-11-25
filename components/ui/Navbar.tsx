"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaBoxes,
  FaShoppingCart,
  FaRedo,
  FaClock,
  FaChartPie,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isInsightsOpen, setInsightsOpen] = useState(false); // Manage dropdown state

  // Navbar items
  const navItems = [
    { path: "/dashboard", icon: <FaTachometerAlt />, name: "Dashboard" },
    { path: "/dashboard/inventory", icon: <FaBoxes />, name: "Inventory" },
    { path: "/dashboard/orders", icon: <FaShoppingCart />, name: "Orders" },
    { path: "/dashboard/returns", icon: <FaRedo />, name: "Returns" },
    { path: "/dashboard/sla", icon: <FaClock />, name: "SLA Estimation" },
  ];

  // Insights dropdown items
  const insightsItems = [
    { path: "/dashboard/insights/inventory", name: "Inventory" },
    { path: "/dashboard/insights/orders", name: "Orders" },
    { path: "/dashboard/insights/customers", name: "Customers" },
  ];

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Cross_Year
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`flex flex-col items-center text-lg ${
                      pathname === item.path
                        ? "text-yellow-300" // Highlight active icon
                        : "text-white hover:text-yellow-200"
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>{" "}
                    {/* Optional */}
                  </span>
                </Link>
              </li>
            ))}

            {/* Insights Dropdown */}
            <li className="relative">
              <button
                onClick={() => setInsightsOpen(!isInsightsOpen)}
                className="flex flex-col items-center text-lg hover:text-yellow-200"
              >
                <div className="flex items-center gap-1">
                  <div className="flex-col items-center align-middle">
                    <FaChartPie
                      className={
                        pathname.startsWith("/dashboard/insights")
                          ? "text-yellow-300 ml-3"
                          : "text-white ml-3"
                      } 
                    />
                    <span className="text-sm">Insights</span>
                  </div>

                  <FaChevronDown
                    className={`mt-1 transition-transform ${
                      isInsightsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {isInsightsOpen && (
                <ul className="absolute top-12 bg-white text-black rounded shadow-lg p-2 space-y-2">
                  {insightsItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>
                        <span
                          className={`block px-4 py-2 rounded ${
                            pathname === item.path
                              ? "bg-gray-200 font-semibold"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
