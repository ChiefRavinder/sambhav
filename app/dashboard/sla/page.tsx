"use client"
import { useState } from "react";
import { Button } from "../../../components/ui/button";

export default function SLA() {
  const [destination, setDestination] = useState<string>("");
  const [deliveryTime, setDeliveryTime] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Mock API Call to Estimate Delivery Time
  const handleEstimate = async () => {
    setLoading(true);
    setDeliveryTime(null);

    // Simulate an API call with setTimeout
    setTimeout(() => {
      // Simulate random delivery time
      const estimatedTime = Math.floor(Math.random() * 5) + 1; // Random delivery time between 1-5 days
      setDeliveryTime(`${estimatedTime} day(s)`);
      setLoading(false);
    }, 1000); // 1-second delay to simulate API call
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SLA Estimation</h1>

      <div className="mb-6">
        <label
          htmlFor="destination"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Enter Destination:
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="E.g., New York, USA"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <Button
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        onClick={handleEstimate}
        disabled={loading || !destination}
      >
        {loading ? "Estimating..." : "Estimate Delivery Time"}
      </Button>

      {deliveryTime && (
        <div className="mt-6 text-lg font-semibold text-green-600">
          Estimated Delivery Time: {deliveryTime}
        </div>
      )}
    </div>
  );
}
