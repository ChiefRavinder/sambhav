import { useState } from "react";
import { Button } from "./button";

export default function InventoryModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  const [product, setProduct] = useState({ name: "", stock: 0, price: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Submitted", product);
    closeModal();
  };

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded shadow-lg w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Add/Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 border rounded"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="stock">
                Stock
              </label>
              <input
                id="stock"
                name="stock"
                type="number"
                className="w-full px-4 py-2 border rounded"
                value={product.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="w-full px-4 py-2 border rounded"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" className="bg-gray-500 text-white" onClick={closeModal}>
                Close
              </Button>
              <Button type="submit" className="bg-blue-500 text-white">
                Save Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
