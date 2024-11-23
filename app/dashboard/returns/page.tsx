"use client"
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";

export default function Returns() {
  const [returns, setReturns] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Returns Data
  useEffect(() => {
    const fetchReturns = async () => {
      setLoading(true);

      // Simulate API call with setTimeout
      setTimeout(() => {
        const mockReturns = [
          { id: 1, orderId: 101, customer: "John Doe", reason: "Damaged", status: "Pending" },
          { id: 2, orderId: 102, customer: "Jane Smith", reason: "Wrong item", status: "Approved" },
          { id: 3, orderId: 103, customer: "Mark Lee", reason: "Better price elsewhere", status: "Denied" },
          { id: 4, orderId: 104, customer: "Sarah Lee", reason: "Changed mind", status: "Pending" },
        ];

        setReturns(mockReturns);
        setLoading(false);
      }, 1000); // 1-second delay to simulate real API call
    };

    fetchReturns();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Returns Management</h1>
      {loading ? (
        <div className="text-gray-500">Loading returns...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">Return ID</th>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Reason</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {returns.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-3">{item.id}</td>
                  <td className="px-6 py-3">{item.orderId}</td>
                  <td className="px-6 py-3">{item.customer}</td>
                  <td className="px-6 py-3">{item.reason}</td>
                  <td className="px-6 py-3">{item.status}</td>
                  <td className="px-6 py-3">
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Approve
                    </Button>
                    <Button className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Deny
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
