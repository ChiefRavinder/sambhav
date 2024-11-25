"use client"
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

export default function Sidebar() {
  const pathname = usePathname(); // Get the current path
  const [isInsightsOpen, setInsightsOpen] = useState(false); // Manage dropdown state

  // Sidebar items
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
    <div className="h-full bg-gray-800 text-white p-4 ">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <span
                className={`flex items-center space-x-3 p-2 rounded ${
                  pathname === item.path
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </span>
            </Link>
          </li>
        ))}

        {/* Insights Dropdown */}
        <li>
          <button
            onClick={() => setInsightsOpen(!isInsightsOpen)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
          >
            <div className="flex items-center space-x-3">
              <FaChartPie />
              <span>Insights</span>
            </div>
            <FaChevronDown
              className={`transition-transform ${
                isInsightsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isInsightsOpen && (
            <ul className="pl-6 mt-2 space-y-2">
              {insightsItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span
                      className={`block p-2 rounded ${
                        pathname === item.path
                          ? "bg-gray-700"
                          : "hover:bg-gray-700"
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
    </div>
  );
}
