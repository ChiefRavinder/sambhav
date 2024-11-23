import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <footer className="text-center py-4 text-gray-600">
        © 2024 Your Project Name. All rights reserved.
      </footer>
    </div>
  );
}
