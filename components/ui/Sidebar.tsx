import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-full fixed">
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block hover:text-blue-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/inventory" className="block hover:text-blue-400">
              Inventory
            </Link>
          </li>
          <li>
            <Link href="/dashboard/orders" className="block hover:text-blue-400">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/dashboard/returns" className="block hover:text-blue-400">
              Returns
            </Link>
          </li>
          <li>
            <Link href="/dashboard/sla" className="block hover:text-blue-400">
              SLA Estimation
            </Link>
          </li>
          <li>
            <Link href="/dashboard/analytics" className="block hover:text-blue-400">
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/dashboard/marketplaces" className="block hover:text-blue-400">
              Marketplaces
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
