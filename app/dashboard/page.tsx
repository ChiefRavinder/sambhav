"use client"
import Sidebar from "../../components/ui/Sidebar";
import { useEffect, useState } from "react";

export default function Dashboard() {
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
          ordersSynced: 1523,
          inventorySynced: 10450,
          slaChecks: 234,
        });
        setLoading(false);
      }, 1000); // 1-second delay to simulate a real API call
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        {loading ? (
          <div className="text-gray-500">Loading stats...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard
              title="Orders Synced"
              value={stats.ordersSynced}
              color="blue"
            />
            <StatCard
              title="Inventory Synced"
              value={stats.inventorySynced}
              color="green"
            />
            <StatCard
              title="SLA Checks Performed"
              value={stats.slaChecks}
              color="purple"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string; value: number; color: string }) {
  const textColor = `text-${color}-500`;
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <h2 className={`text-2xl font-bold ${textColor}`}>{value}</h2>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}
