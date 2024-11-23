"use client"
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Orders Data
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);

      // Simulate API call with setTimeout
      setTimeout(() => {
        const mockOrders = [
          { id: 1, customer: "John Doe", status: "Shipped", total: "$50" },
          { id: 2, customer: "Jane Smith", status: "Pending", total: "$35" },
          { id: 3, customer: "Mark Lee", status: "Delivered", total: "$75" },
          { id: 4, customer: "Sarah Lee", status: "Canceled", total: "$20" },
        ];

        setOrders(mockOrders);
        setLoading(false);
      }, 1000); // 1-second delay to simulate real API call
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders Management</h1>
      {loading ? (
        <div className="text-gray-500">Loading orders...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-6 py-3">{order.id}</td>
                  <td className="px-6 py-3">{order.customer}</td>
                  <td className="px-6 py-3">{order.status}</td>
                  <td className="px-6 py-3">{order.total}</td>
                  <td className="px-6 py-3">
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      View
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
