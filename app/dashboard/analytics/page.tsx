"use client"
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState<any>({
    orders: [],
    inventoryLevels: [],
    slaPerformance: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Analytics Data
  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);

      // Simulate API call with setTimeout
      setTimeout(() => {
        const mockData = {
          orders: [50, 120, 80, 200, 150, 180, 300],
          inventoryLevels: [500, 480, 460, 450, 430, 420, 410],
          slaPerformance: [95, 98, 97, 99, 96, 98, 100],
        };

        setAnalyticsData(mockData);
        setLoading(false);
      }, 1000); // 1-second delay to simulate real API call
    };

    fetchAnalytics();
  }, []);

  // Chart.js Data for Orders, Inventory, and SLA Performance
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: analyticsData.orders,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Inventory Levels",
        data: analyticsData.inventoryLevels,
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "SLA Performance",
        data: analyticsData.slaPerformance,
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      {loading ? (
        <div className="text-gray-500">Loading analytics...</div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
            <Line data={chartData} />
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Inventory Levels</h2>
            <Line data={chartData} />
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">SLA Performance</h2>
            <Line data={chartData} />
          </div>

          <Button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Refresh Data
          </Button>
        </div>
      )}
    </div>
  );
}
