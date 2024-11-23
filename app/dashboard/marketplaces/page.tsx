"use client"
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";

export default function Marketplaces() {
  const [marketplaces, setMarketplaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call to Fetch Seller's Marketplaces
  useEffect(() => {
    const fetchMarketplaces = async () => {
      setLoading(true);
      setTimeout(() => {
        const mockMarketplaces = [
          { id: 1, name: "Amazon", status: "Synced" },
          { id: 2, name: "Shopify", status: "Pending" },
          { id: 3, name: "eBay", status: "Error" },
          { id: 4, name: "Walmart", status: "Synced" },
        ];
        setMarketplaces(mockMarketplaces);
        setLoading(false);
      }, 1000);
    };

    fetchMarketplaces();
  }, []);

  const handleRemoveMarketplace = (id: number) => {
    setMarketplaces((prev) => prev.filter((marketplace) => marketplace.id !== id));
  };

  const handleAddMarketplace = (marketplace: { name: string; status: string }) => {
    setMarketplaces((prev) => [...prev, marketplace]);
  };

  const handleSyncMarketplace = (id: number) => {
    setMarketplaces((prev) =>
      prev.map((marketplace) =>
        marketplace.id === id ? { ...marketplace, status: "Syncing..." } : marketplace
      )
    );

    // Simulate sync completion after 3 seconds
    setTimeout(() => {
      setMarketplaces((prev) =>
        prev.map((marketplace) =>
          marketplace.id === id ? { ...marketplace, status: "Synced" } : marketplace
        )
      );
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Marketplaces</h1>

      {loading ? (
        <div className="text-gray-500">Loading marketplaces...</div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Marketplace Integrations</h2>
          <ul className="space-y-4">
            {marketplaces.map((marketplace) => (
              <li key={marketplace.id} className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                <div className="text-lg font-semibold">{marketplace.name}</div>
                <div className={`text-sm font-medium ${marketplace.status === "Synced" ? "text-green-500" : marketplace.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                  {marketplace.status}
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => handleSyncMarketplace(marketplace.id)}>
                    Sync
                  </Button>
                  <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => handleRemoveMarketplace(marketplace.id)}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <Button
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            onClick={() => handleAddMarketplace({ name: "New Marketplace", status: "Pending" })}
          >
            Add New Marketplace
          </Button>
        </div>
      )}
    </div>
  );
}
