"use client"
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import Logo from "../public/logo.svg"
import Image from "next/image";


export default function Home() {
  const [stats, setStats] = useState({
    ordersSynced: 0,
    inventorySynced: 0,
    slaChecks: 0,
  });

  const [loading, setLoading] = useState(true);

  // Mock API Call to Fetch Stats
  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);

      // Simulate an API call
      setTimeout(() => {
        setStats({
          ordersSynced: 512,
          inventorySynced: 1245,
          slaChecks: 87,
        });
        setLoading(false);
      }, 1000); // 1-second delay to simulate a real API call
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-6 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex gap-2">
          <Image src={Logo} alt="logo" width={30} />
          Cross_Year Integration Tool
        </Link>
        {/* <Image src={Logo} alt="logo" width={30} /> */}
          {/* <h1 className="text-2xl font-bold">Cross_Year Integration Tool</h1> */}
          <Link href="/dashboard">
            <Button className="bg-white text-blue-500">Go to Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Streamline Your Fulfillment Process
        </h2>
        <p className="text-gray-600 mb-8">
          Automate inventory management, order tracking, and delivery with
          seamless Amazon MCF integration.
        </p>
        <Link href="/dashboard">
          <Button className="px-6 py-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </Button>
        </Link>
      </main>

      {/* Stats Section */}
      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Real-Time Metrics
        </h3>
        {loading ? (
          <div className="text-center text-gray-500">Loading stats...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded p-6 text-center">
              <h4 className="text-xl font-bold text-blue-500">
                {stats.ordersSynced}
              </h4>
              <p className="text-gray-600">Orders Synced</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h4 className="text-xl font-bold text-blue-500">
                {stats.inventorySynced}
              </h4>
              <p className="text-gray-600">Inventory Synced</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h4 className="text-xl font-bold text-blue-500">
                {stats.slaChecks}
              </h4>
              <p className="text-gray-600">SLA Checks Performed</p>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          Key Features of Our Tool
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-Time Inventory Sync"
            description="Keep your product listings up to date across platforms automatically."
          />
          <FeatureCard
            title="Order Processing Automation"
            description="Seamlessly track, process, and manage orders from storefront to delivery."
          />
          <FeatureCard
            title="SLA & Delivery Estimation"
            description="Ensure delivery timelines with accurate SLA checks before commitment."
          />
          <FeatureCard
            title="Returns Management"
            description="Simplify the return process with automated workflows."
          />
          <FeatureCard
            title="Analytics Dashboard"
            description="Gain insights into inventory, order status, and performance metrics."
          />
          <FeatureCard
            title="Global Scalability"
            description="Expand to new markets effortlessly with Amazon MCF."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow rounded p-6">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
