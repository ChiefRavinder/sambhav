"use client"
import { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
  // State for metrics, activities, and loading
  const [loading, setLoading] = useState(true);

  // Metrics Data
  const metrics = [
    { title: "Total Sales", value: "$25,230", bg: "bg-green-500" },
    { title: "Pending Orders", value: "45", bg: "bg-yellow-500" },
    { title: "SLA Adherence", value: "92%", bg: "bg-blue-500" },
    { title: "Low Stock Items", value: "5", bg: "bg-red-500" },
  ];

  // Mock data for the charts
  const orderData = {
    labels: ["Pending", "Shipped", "Delivered", "Cancelled"],
    datasets: [
      {
        data: [45, 120, 300, 10],
        backgroundColor: ["#FFCE56", "#36A2EB", "#4BC0C0", "#FF6384"],
        hoverBackgroundColor: ["#FFCE56", "#36A2EB", "#4BC0C0", "#FF6384"],
      },
    ],
  };

  const salesTrendData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [2000, 3000, 4000, 3500, 4500, 5000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Recent Activity
  const recentActivities = [
    "Order #12345 shipped to New York.",
    "Inventory updated for 'Eco Bag'.",
    "Amazon Marketplace synced successfully.",
    "Order #12346 marked as delivered.",
  ];

  useEffect(() => {
    // Simulate API loading delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`p-6 text-white rounded-lg shadow-lg ${metric.bg}`}
          >
            <h2 className="text-lg font-medium">{metric.title}</h2>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Visualization Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Orders Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Order Status Overview</h2>
          {!loading ? <Pie data={orderData} /> : <p>Loading chart...</p>}
        </div>

        {/* Sales Trend Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Monthly Sales Trend</h2>
          {!loading ? <Line data={salesTrendData} /> : <p>Loading chart...</p>}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-gray-700">
              {activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-10 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Inventory
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Process Orders
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Generate Reports
        </button>
      </div>

      {/* Gamification Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-green-600 font-semibold">100 Orders Fulfilled</li>
          <li className="text-yellow-600 font-semibold">50 Products Restocked</li>
          <li className="text-blue-600 font-semibold">Marketplace Synced</li>
        </ul>
      </div>
    </div>
  );
}
