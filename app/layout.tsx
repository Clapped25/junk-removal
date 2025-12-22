import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Fenfen’s Barbershop",
  description: "Book appointments, view barber availability, and check live wait times.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        <Navbar />
        <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
