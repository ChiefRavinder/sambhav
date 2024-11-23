import { useState } from "react";

export default function SLAEstimator() {
  const [destination, setDestination] = useState("");
  const [deliveryTime, setDeliveryTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEstimate = async () => {
    setLoading(true);
    setDeliveryTime(null);

    // Simulate API call (replace this with actual API integration)
    setTimeout(() => {
      const estimatedTime = Math.floor(Math.random() * 5) + 1; // Random delivery time between 1-5 days
      setDeliveryTime(`${estimatedTime} day(s)`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h3 className="text-xl font-bold mb-4">SLA Estimation Tool</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEstimate();
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-gray-700 font-medium mb-2"
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
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={loading}
        >
          {loading ? "Estimating..." : "Estimate Delivery Time"}
        </button>
      </form>
      {deliveryTime && (
        <div className="mt-4 text-green-600 font-medium">
          Estimated Delivery Time: {deliveryTime}
        </div>
      )}
    </div>
  );
}
