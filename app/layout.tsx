import './globals.css';
// import { InventoryProvider } from "../context/InventoryContext";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
