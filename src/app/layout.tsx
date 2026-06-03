import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K & A Excavation & Wastewater Solutions | Rockport, ME",
  description:
    "Professional excavation, lawn care, hardscaping, and wastewater services in Midcoast Maine. Serving Rockport, Camden, Rockland, and surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
