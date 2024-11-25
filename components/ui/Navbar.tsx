"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaBoxes, FaShoppingCart, FaRedo, FaClock, FaChartPie } from "react-icons/fa";

export default function Navbar() {
  const router = usePathname();

  // Define the navbar links with their icons and paths
  const navItems = [
    { path: "/dashboard", icon: <FaTachometerAlt />, name: "Dashboard" },
    { path: "/dashboard/inventory", icon: <FaBoxes />, name: "Inventory" },
    { path: "/dashboard/orders", icon: <FaShoppingCart />, name: "Orders" },
    { path: "/dashboard/returns", icon: <FaRedo />, name: "Returns" },
    { path: "/dashboard/sla", icon: <FaClock />, name: "SLA Estimation" },
    { path: "/dashboard/analytics", icon: <FaChartPie />, name: "Analytics" },
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
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`flex flex-col items-center text-2xl ${
                      router === item.path
                        ? "text-yellow-300" // Highlight active icon
                        : "text-white hover:text-yellow-200"
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span> 
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
