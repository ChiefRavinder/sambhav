"use client"
import { useState, useEffect } from "react";

export default function CustomerInsights() {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Customer Insights
  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);

      setTimeout(() => {
        const mockData = [
          { product: "Eco Bag", purchases: 120, peakTime: "Evenings" },
          { product: "Reusable Straw", purchases: 80, peakTime: "Afternoons" },
          { product: "Organic Soap", purchases: 50, peakTime: "Mornings" },
        ];

        setInsights(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchInsights();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customer Insights</h1>
      {loading ? (
        <div className="text-gray-500">Loading customer insights...</div>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Purchases</th>
              <th className="px-6 py-3 text-left">Peak Shopping Time</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-3">{item.product}</td>
                <td className="px-6 py-3">{item.purchases}</td>
                <td className="px-6 py-3">{item.peakTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
