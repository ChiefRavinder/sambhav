import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Cross_Year Integration Tool
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="hover:text-blue-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/inventory" className="hover:text-blue-200">
                Inventory
              </Link>
            </li>
            <li>
              <Link href="/dashboard/orders" className="hover:text-blue-200">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/dashboard/returns" className="hover:text-blue-200">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/dashboard/sla" className="hover:text-blue-200">
                SLA Estimation
              </Link>
            </li>
            <li>
              <Link href="/dashboard/analytics" className="hover:text-blue-200">
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
