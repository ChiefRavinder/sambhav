"use client"
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

export default function Inventory() {
  const [inventory, setInventory] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredInventory, setFilteredInventory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Inventory Data
  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true);

      setTimeout(() => {
        const mockData = [
          { id: 1, name: "Eco Bag", stock: 50, price: "$10" },
          { id: 2, name: "Reusable Straw", stock: 100, price: "$5" },
          { id: 3, name: "Organic Soap", stock: 30, price: "$8" },
          { id: 4, name: "Bamboo Toothbrush", stock: 200, price: "$3" },
        ];

        setInventory(mockData);
        setFilteredInventory(mockData);
        setLoading(false);
      }, 1000); // 1-second delay to simulate real API call
    };

    fetchInventory();
  }, []);

  // Filter inventory based on search query
  useEffect(() => {
    if (search === "") {
      setFilteredInventory(inventory);
    } else {
      const filtered = inventory.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredInventory(filtered);
    }
  }, [search, inventory]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border rounded w-full"
        />
      </div>

      {loading ? (
        <div className="text-gray-500">Loading inventory...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">Product ID</th>
                <th className="px-6 py-3 text-left">Product Name</th>
                <th className="px-6 py-3 text-left">Stock</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-3">{item.id}</td>
                  <td className="px-6 py-3">{item.name}</td>
                  <td className="px-6 py-3">{item.stock}</td>
                  <td className="px-6 py-3">{item.price}</td>
                  <td className="px-6 py-3">
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Edit
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

