import { useEffect, useState } from "react";

const sampleInventory = [
  { id: 1, name: "Eco Bag", stock: 50, price: "$10" },
  { id: 2, name: "Reusable Straw", stock: 100, price: "$5" },
];

export default function InventoryTable() {
  const [inventory, setInventory] = useState(sampleInventory);

  useEffect(() => {
    // Fetch real-time inventory from API
    // Example: fetch("/api/inventory").then(res => res.json()).then(data => setInventory(data));
  }, []);

  return (
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">Stock</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="px-4 py-2">{item.id}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.stock}</td>
            <td className="px-4 py-2">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
