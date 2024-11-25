"use client"
import { useState, useEffect } from "react";

export default function OrderRecommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);

      setTimeout(() => {
        const mockData = [
          { order: "#12345", shippingMethod: "Standard", cost: "$5", estimatedTime: "5-7 days" },
          { order: "#12346", shippingMethod: "Express", cost: "$15", estimatedTime: "2-3 days" },
          { order: "#12347", shippingMethod: "Overnight", cost: "$25", estimatedTime: "1 day" },
        ];

        setRecommendations(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Order Recommendations</h1>
      {loading ? (
        <div className="text-gray-500">Loading recommendations...</div>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left">Order</th>
              <th className="px-6 py-3 text-left">Recommended Shipping Method</th>
              <th className="px-6 py-3 text-left">Cost</th>
              <th className="px-6 py-3 text-left">Estimated Time</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-3">{item.order}</td>
                <td className="px-6 py-3">{item.shippingMethod}</td>
                <td className="px-6 py-3">{item.cost}</td>
                <td className="px-6 py-3">{item.estimatedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
