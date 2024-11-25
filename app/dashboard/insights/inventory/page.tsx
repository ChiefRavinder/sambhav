"use client"
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function InventoryForecasting() {
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Forecast Data
  useEffect(() => {
    const fetchForecastData = async () => {
      setLoading(true);

      setTimeout(() => {
        const mockData = [
          { product: "Eco Bag", currentStock: 50, depletionDate: "2024-12-10" },
          { product: "Reusable Straw", currentStock: 100, depletionDate: "2024-12-15" },
          { product: "Organic Soap", currentStock: 30, depletionDate: "2024-12-07" },
          { product: "Bamboo Toothbrush", currentStock: 200, depletionDate: "2025-01-01" },
        ];

        setForecastData(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchForecastData();
  }, []);

  // Prepare Chart Data
  const chartData = {
    labels: forecastData.map((item) => item.product),
    datasets: [
      {
        label: "Current Stock",
        data: forecastData.map((item) => item.currentStock),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory Forecasting</h1>
      {loading ? (
        <div className="text-gray-500">Loading forecast data...</div>
      ) : (
        <div>
          <div className="mb-6">
            <Line data={chartData} />
          </div>
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Current Stock</th>
                <th className="px-6 py-3 text-left">Predicted Depletion Date</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-3">{item.product}</td>
                  <td className="px-6 py-3">{item.currentStock}</td>
                  <td className="px-6 py-3">{item.depletionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
